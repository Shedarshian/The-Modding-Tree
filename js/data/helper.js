function pause() {
    ticking = true;
}

function unpause() {
    ticking = false;
    player.time = Date.now();
}