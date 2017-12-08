#pragma strict

var objectTag: String;

var soundyes : AudioClip;

function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == objectTag){
        AudioSource.PlayClipAtPoint(soundyes, transform.position);
    }
}