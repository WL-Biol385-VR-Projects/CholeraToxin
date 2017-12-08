#pragma strict

var thing : GameObject;
var duration : float = 0;

function Start () {
	yield WaitForSeconds(duration);
    thing.SetActive(true);
}