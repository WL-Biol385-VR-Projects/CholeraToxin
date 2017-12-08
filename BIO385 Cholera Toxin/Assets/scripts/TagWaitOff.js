#pragma strict

var thing : GameObject;
var objectTag: String;
var duration : float = 1;

function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == objectTag){
        yield WaitForSeconds(duration);
        thing.SetActive(false);
    }
}