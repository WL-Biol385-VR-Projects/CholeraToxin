#pragma strict

var incommimngcamp : GameObject;
var lite : GameObject;
var stationarycamp : GameObject;
var flow : GameObject;
var objectTag: String;

function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == objectTag){
        incommimngcamp.SetActive(false);
        lite.SetActive(false);
        stationarycamp.SetActive(true);
        flow.SetActive(true);
    }
}