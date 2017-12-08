#pragma strict

var thingon : GameObject;
var thingoff : GameObject;
var thing1 : GameObject;
var thing2 : GameObject;
var thing3 : GameObject;
var thing4 : GameObject;
var objectTag: String;
var duration : float = 1;

function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == objectTag){
        thingoff.SetActive(false);
        thing4.SetActive(true);
        thingon.SetActive(true);
        yield WaitForSeconds(duration);
        thing1.SetActive(true);
        yield WaitForSeconds(duration);
        thing2.SetActive(true);
        yield WaitForSeconds(duration);
        thing3.SetActive(true);
    }
}