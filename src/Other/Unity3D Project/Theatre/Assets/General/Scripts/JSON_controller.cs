using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine;

public class JSON_controller : MonoBehaviour {

    // inspector-visible prefabs
    public Transform actorObject;
    public Transform shadowObject;
    public Transform arrowObject;

    // parameters for original placement
    public Transform start, end;
    public float shiftWidth = 1, shiftHeight = 1;

    // constant replacement
    // JSON_Utility doesn't handle null values, so any null
    // values in the received JSON will be replaced by 42
    private float NULL = 42;

    // Keeping track of existing Transforms
    // actors, shadows, and arrows should all be keyed by the passed in CharacterID
    private Dictionary<string, Transform> actors = new Dictionary<string, Transform>();
    private Dictionary<string, Transform> shadows = new Dictionary<string, Transform>();
    private Dictionary<string, Transform> arrows = new Dictionary<string, Transform>();

    // variables handling the placement of "unplaced" actors
    private int docked = 0; 
    private int columns = 0;

    // UNCOMMENT to preload sample JSON data
    // The data should generally be provided from the website calling the LoadBlockingData() function
    //*************************************
    //void Start()
    //{
    //    // Sample JSON to test with in Unity Editor
    //    string json = "[{\"CharacterID\":4,\"CharacterName\":\"Romeo\",\"OriginX\":null,\"OriginY\":null,\"OriginZ\":null,\"DestX\":null,\"DestY\":null,\"DestZ\":null},{\"CharacterID\":5,\"CharacterName\":\"Juliet\",\"OriginX\":null,\"OriginY\":null,\"OriginZ\":null,\"DestX\":-1.73958,\"DestY\":0.103546,\"DestZ\":0}]";
    //    LoadBlockingData(json);
    //}


     /* 
      * LoadBlockingData should be called by the website's javascript
      * to pass in the JSON info for whichever line is meant to be
      * displayed/edited. 
      *
      *  i.e SendMessage("UnityReactAnchor", "LoadBlockingData", json_string);
      *  where UnityReactAnchor is the name of the Unity game object that 
      *  this script is attached to. 
      */
    public void LoadBlockingData(string json)
    {
        // reformat and parse the received JSON
        json = json.Replace("null", NULL.ToString());
        string fixedJson = JsonHelper.fixJson(json);
        Blocking[] blockings = JsonHelper.FromJson<Blocking>(fixedJson);

        
        // clean dictionary objects
        // TODO: in future, consider an alternative method perhaps to not destroy objects
        //       that are just going to be re-added
        foreach (KeyValuePair<string, Transform> actor in actors) Destroy(actor.Value.gameObject);
        foreach (KeyValuePair<string, Transform> shadow in shadows) Destroy(shadow.Value.gameObject);
        foreach (KeyValuePair<string, Transform> arrow in arrows) Destroy(arrow.Value.gameObject);
        actors = new Dictionary<string, Transform>();
        shadows = new Dictionary<string, Transform>();
        arrows = new Dictionary<string, Transform>();

        // Reset variables so that unplaced actors
        // will start from the bottom left of the screen
        // again
        docked = 0;
        columns = 0;

        // iterate through and render each actor
        foreach (Blocking b in blockings) {
            Actor a = new Actor(b);
            Render(a);
        }

    }

    /* 
      * LoadBlockingData should be called by the website's javascript
      * to request a "save" where we send any modificated blocking
      * back to the DB. Call similar to LoadBlockingData().
      */
    public void TriggerRecordUnityData()
    {
        SendBlocking();
    }

    // Reference to javascript function we're calling to "send"
    // data to the website (i.e) when we "save"
    [DllImport("__Internal")]
    private static extern void RecordUnityData(string json);

    /*
     * send blocking data back to website
     */
    public void SendBlocking()
    {
        // collect information from shadow transforms
        List<Click> clicks = new List<Click>();
        foreach (KeyValuePair<string,Transform> kvp in shadows) {
            Actor a = kvp.Value.GetComponent<actor2d>().actor;
            if (a.destination != a.lastDestination) {
                clicks.Add(new Click(a.id, kvp.Value.position));
            }
        }

        // Create JSON string to send through React JS to eventually update DB
        string json = JsonHelper.ToJson<Click>(clicks.ToArray(), false);
 
        // send json to website
        // RecordUnityData(json);               // <-- not working at present, using legacy work-around
        Application.ExternalCall("RecordUnityData", json);
    }

    // Update actor's position, rotation, blocking, etc...
    public void Render(Actor pos)
    {

        // origin hasn't been set (i.e. hasn't moved, should be "docked")
        if (pos.canSetOrigin) {

            // calculate where the unplaced actor should be placed off-scene
            pos.origin = start.position + new Vector3(shiftWidth * docked, 0, shiftHeight * columns);
            docked++;

            // Add a second column if necc. (i.e  too many actors to fit)
            if (shiftWidth * docked + start.position.x >= end.position.x) {
                columns++;
                docked = 0;
            }  

            // Make sure that no destination is set, if none was already set
            if (pos.destination.x == NULL || pos.destination.y == NULL || pos.destination.z == NULL) {
                pos.destination = pos.origin;
            }

            pos.lastDestination = pos.destination;
            pos.canSetOrigin = false;

        }
        
        // HANDLING actor objects (the representation of where the actor is)
        if (actors.ContainsKey(pos.name)) {
            actors[pos.name].position = pos.origin;
        }
        else {

            // Extract color from name string
            Random.InitState(pos.name.GetHashCode());
            Color color = Random.ColorHSV();

            // Create actor
            Transform actor = Instantiate<Transform>(actorObject, pos.origin, Quaternion.identity);
            actor.name = pos.name;
            actor.GetComponent<SpriteRenderer>().color = color;
            actor.Find("Text").GetComponent<TextMesh>().text = pos.name.Substring(0, 1);
            actor.GetComponent<actor2d>().actor = pos;

            // add actor to list
            actors.Add(pos.name, actor);
        }

        // HANDLING actor shadows (the representation of where the actor is going to)
        if (shadows.ContainsKey(pos.name)) {
            shadows[pos.name].position = pos.destination;
        }
        else {

            // Extract color from name string
            Random.InitState(pos.name.GetHashCode());
            Color color = Random.ColorHSV();
            color.a = 0.2f;
            // create shadow object
            Transform shadow = Instantiate<Transform>(shadowObject, pos.destination, Quaternion.identity);
            shadow.tag = "Shadow";
            shadow.GetComponent<SpriteRenderer>().color = color;
            shadow.name = "shadow " + pos.name;
            shadow.Find("Text").GetComponent<TextMesh>().text = pos.name.Substring(0, 1);
            shadow.GetComponent<actor2d>().actor = pos;

            // add links to the associated Transforms
            if (actors.ContainsKey(pos.name)) {
                actors[pos.name].GetComponent<actor2d>().shadow = shadow;
                shadow.GetComponent<actor2d>().actor.actor = actors[pos.name];
            }

            // displaying shadow (if origin and destination coordinates are different)
            if (pos.destination != pos.origin) {
                shadow.GetComponent<SpriteRenderer>().enabled = true;
                shadow.GetComponent<BoxCollider>().enabled = true;
                shadow.Find("Text").GetComponent<MeshRenderer>().enabled = true;
            }

            //  add shadow to list
            shadows.Add(pos.name, shadow);

        }

        // HANDLING actor arrows (to point towards where the actor is going)
        if (!arrows.ContainsKey(pos.name)) {

            // Extract color from name string
            Random.InitState(pos.name.GetHashCode());
            Color color = Random.ColorHSV();
            color.a = 0.2f;

            // create arrow object
            Transform arrow = Instantiate<Transform>(arrowObject, (pos.origin + pos.destination) / 2, Quaternion.identity);
            arrowScript ar = arrow.GetComponent<arrowScript>();
            ar.actor = actors[pos.name];
            ar.shadow = shadows[pos.name];
            ar.color = color;


            // displaying arrow (if origin and destination coordinates are different)
            if (pos.destination != pos.origin) {
                arrow.GetComponent<SpriteRenderer>().enabled = true;
            }

            //  add arrow to list
            arrows.Add(pos.name, arrow);

        }
    }
}

/*
* C# JSON Blocking object equivalent
* will receive a list of these from website
*/
[System.Serializable]
public class Blocking {
    public int CharacterID;
    public string CharacterName;
    public float OriginX;
    public float OriginY;
    public float OriginZ;
    public float DestX;
    public float DestY;
    public float DestZ;

    // default constructor with random data
    // rely on JSON string for actual data
    public Blocking()
    {
        CharacterID = Random.Range(0, 10);
        string[] names = { "Romeo", "Juliet", "Hamlet", "King Lear" };
        CharacterName = names[Random.Range(0, names.Length)];
        DestX = Random.Range(-2f, 2f);
        DestY = Random.Range(-2f, 2f);
        DestZ = 0;
        OriginX = Random.Range(-2f, 2f);
        OriginY = Random.Range(-2f, 2f);
        OriginZ = 0;
    }
}

/*
 * a class handling the data to send back to the website
 * CharacterID, destination position
 * 
 * currently this is going to be the position of the "shadow" object if it's been moved by the editor
 */
[System.Serializable]
public class Click {
    public int CharacterID;
    public float DestX;
    public float DestY;
    public float DestZ;

    // constructor
    public Click(int id, Vector3 position)
    {
        CharacterID = id;
        DestX = position.x;
        DestY = position.y;
        DestZ = position.z;
    }
}

/*
 * JSON parser to help handle Unity's Json Utility's 
 * top-level list limitation
 */
public static class JsonHelper {
    public static T[] FromJson<T>(string json)
    {
        Wrapper<T> wrapper = JsonUtility.FromJson<Wrapper<T>>(json);
        return wrapper.Items;
    }

    public static string ToJson<T>(T[] array)
    {
        Wrapper<T> wrapper = new Wrapper<T>();
        wrapper.Items = array;
        return JsonUtility.ToJson(wrapper);
    }

    public static string ToJson<T>(T[] array, bool prettyPrint)
    {
        Wrapper<T> wrapper = new Wrapper<T>();
        wrapper.Items = array;
        return JsonUtility.ToJson(wrapper, prettyPrint);
    }

    [System.Serializable]
    private class Wrapper<T> {
        public T[] Items;
    }

    public static string fixJson(string value)
    {
        value = "{\"Items\":" + value + "}";
        return value;
    }
}