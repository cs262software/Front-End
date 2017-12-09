using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class arrowScript : MonoBehaviour {

    public Transform actor, shadow;
    public Color color = Color.black;
    public float padding = 1;

    private float WIDTH;

    void Start()
    {
        WIDTH = transform.GetComponent<SpriteRenderer>().sprite.bounds.max.x * 2f;
        GetComponent<SpriteRenderer>().color = color;
    }

    // Update is called once per frame
    void Update () {

        // setting position
        Vector3 position = 0.5f * (actor.position + shadow.position);
        transform.position = new Vector3(position.x, position.y, 0.1f);

        // scaling the arrow
        float distance = (shadow.position - actor.position).magnitude;
        float scaleX = (distance - padding) / WIDTH;
        transform.localScale = new Vector2(scaleX, transform.localScale.y);

        // rotate
        Vector3 dir = shadow.position - actor.position;
        var angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg;
        transform.rotation = Quaternion.AngleAxis(angle, Vector3.forward);



    }
}
