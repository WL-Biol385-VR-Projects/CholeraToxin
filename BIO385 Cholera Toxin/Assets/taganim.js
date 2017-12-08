#pragma strict

var anione : Animator;
var anitwo : Animator;
var thing1 : GameObject;
var thing2 : GameObject;
var thing3 : GameObject;
var thing4 : GameObject;
var thing5 : GameObject;
var objectTag: String;
var duration1 : float = 1;
var duration2 : float = 1;
var duration3 : float = 1;
var sound : GameObject;
var sound2 : GameObject;

function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == objectTag){
        sound.SetActive(true);
        thing1.SetActive(false);
        thing2.SetActive(true);
        anione.enabled = true;
        thing5.SetActive(false);
        yield WaitForSeconds(duration1);
        thing2.SetActive(false);
        thing3.SetActive(true);    
        anitwo.enabled = true;
        yield WaitForSeconds(duration2);
        thing3.SetActive(false);
        thing4.SetActive(true);    
        yield WaitForSeconds(duration3);
        sound2.SetActive(true);
    }
}