AFRAME.registerComponent('moving-sun', {
    init: function () {
        this.positionSph = new THREE.Spherical(1, Math.PI/2, 0);
        this.position = new THREE.Vector3();
        this.sss = document.querySelector('a-simple-sun-sky');
        this.directional = document.getElementById('directional');
    },
    tick: function (time) {
        this.positionSph.phi = Math.PI * 0.4 + Math.sin(time / 16000 * 2 * Math.PI) * 0.4;
        this.positionSph.theta = Math.PI + Math.sin(time / 24000 * 2 * Math.PI) * 0.6;
        this.position.setFromSpherical(this.positionSph);
        let positionStr = this.position.x + ' ' + this.position.y + ' ' + this.position.z;
//        console.log(positionStr);
        this.sss.setAttribute('sun-position', positionStr);
        this.directional.setAttribute('position', positionStr);
    }
});