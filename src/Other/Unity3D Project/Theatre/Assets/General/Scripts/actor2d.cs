using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class actor2d : MonoBehaviour {

    public Actor actor;
    public Transform arrow;
    public Transform shadow;

    // 
    private bool dragging = false;
    private RaycastHit hit;
    private Ray ray;

    void Update()
    {

        // drag start
        if (Input.GetMouseButtonDown(0)) {
            ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            if (Physics.Raycast(ray, out hit)) {
                if (hit.transform == transform) {
                    dragging = true;
                    if (transform.tag == "Actor") {
                        shadow.GetComponent<SpriteRenderer>().enabled = true;
                        shadow.GetComponent<BoxCollider>().enabled = true;
                        shadow.Find("Text").GetComponent<MeshRenderer>().enabled = true;
                    }
                }
            }
        }

        // drag end
        if (dragging && Input.GetMouseButtonUp(0)) {          
            ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            if (Physics.Raycast(ray, out hit)) handleDrag(hit);
            dragging = false;
        }
    }

    private void OnMouseDrag()
    {
        // ensures that this object was selected
        if (dragging) {     

            Ray dragRay;
            RaycastHit dragHit;
            dragRay = Camera.main.ScreenPointToRay(Input.mousePosition);
            if (Physics.Raycast(dragRay, out dragHit)) {
                Vector3 position = new Vector3(dragHit.point.x, dragHit.point.y, 0);
                if (transform.tag == "Actor")shadow.position = position;
                else transform.position = position;

            }
        }

        // Cancel a dragging input
        if (Input.GetKeyDown(KeyCode.Escape)) {
            dragging = false;
            if (transform.tag == "Actor") shadow.position = actor.destination;
            else transform.position = actor.destination;
        }
    }


    private void handleDrag(RaycastHit hit)
    {
        // Creating / moving a destination "shadow" (click-n-drag from Actor circle)
        // else if (transform.tag == "Actor" && !actor.canSetOrigin) {
        if (transform.tag == "Actor" && !actor.canSetOrigin) {
            actor.destination = hit.point;
            shadow.position = new Vector3(hit.point.x, hit.point.y, shadow.position.z);
            shadow.GetComponent<actor2d>().actor = actor;

            // un-hiding the hidden destination "shadow" if necessary
            if (actor.destination != actor.origin) {
                shadow.GetComponent<SpriteRenderer>().enabled = true;
                shadow.GetComponent<BoxCollider>().enabled = true;
                shadow.Find("Text").GetComponent<MeshRenderer>().enabled = true;
            }
        }

        // Tweaking a destination "shadow" (click-n-drag destination "shadow")
        if (transform.tag == "Shadow") {
            actor.destination = hit.point;
            transform.position = new Vector3(hit.point.x, hit.point.y, transform.position.z);
        }
    }
}

public class Actor {

    // main properties
    public string name;                         // i.e Romeo, Hamlet, etc.
    public Vector3 origin;                      // x,y,z coordinates for rendering
    public Vector3 destination;
    public bool canSetOrigin = true;            
    public int id = -1;

    public  Vector3 lastOrigin, lastDestination;

    private float NULL = 42;        // needs to be the same as NULL in JSON_CONTROLLER

    // linking properties
    public Transform actor;
    public Transform shadow;

    // constructor
    public Actor(Blocking b)
    {
        name = b.CharacterName;
        origin = new Vector3(b.OriginX, b.OriginY, b.OriginZ);
        destination = new Vector3(b.DestX, b.DestY, b.DestZ);
        id = b.CharacterID;
        
        // null origin --> placing the actor off-stage
        if (origin.x == NULL || origin.y == NULL || origin.z == NULL) canSetOrigin = true;
        else canSetOrigin = false;
    }
}