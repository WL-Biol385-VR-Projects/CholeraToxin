#pragma strict

var thingtomove : GameObject;
var startPoint : Vector3;
var endPoint : Vector3;
var delay : float = 0;
var duration : float = 1;

private var startTime : float;
private var yourVar = false;

function Start () {
		yield WaitForSeconds(delay);
		yourVar = true;
        startTime = Time.time;
    }

function Update () {
    if(yourVar == true){
        thingtomove.transform.position = Vector3.Lerp(startPoint, endPoint, (Time.time - startTime) / duration);
    }
}