const JsARToolKitModule = {
    /**
     * If the scene is empty we setup an example scene that shows simple barcode marker tracking with two markers each having one cube assigned.
     */
    createAR() {
        //Get the scene
        const scene = LS.GlobalScene;
        //Get the scene root
        const sceneRoot = LS.GlobalScene.root;

        //Check if scene root is empty
        if(sceneRoot.childNodes.length === 0){

            //Attached ARControllerComponent to scene root
            const arControllerComponent = new ArControllerComponent();
            sceneRoot.addComponent(arControllerComponent);

            //Add two trackables to the scene
            //Trackable 1
            let arTrackable1 = new LS.SceneNode(ArTrackable2D.trackableName);
            sceneRoot.addChild(arTrackable1);
            let arTrackableComponentPatt = new ArTrackable2D();
            arTrackableComponentPatt.trackablePath = "data/icon-08.patt";
            arTrackable1.addComponent(arTrackableComponentPatt);

            //Trackable 2
            let arTrackable2 = new LS.SceneNode(ArTrackable2D.trackableName);
            // sceneRoot.addChild(arTrackable2);
            const arTrackableComponent = new ArTrackable2D();
            arTrackableComponent.trackableId = 2;
            arTrackable2.addComponent(arTrackableComponent);
            

            //Add 3D cube to trackable1
            let cube = new LS.Components.GeometricPrimitive();
            cube.size = arControllerComponent.defaultMarkerWidth;
            arTrackable1.addComponent(cube);

            //Add 3D sphere to trackable2
            let sphere = new LS.Components.GeometricPrimitive();
            sphere.geometry = LS.Components.GeometricPrimitive.SPHERE;
            sphere.size = arControllerComponent.defaultMarkerWidth;
            arTrackable2.addComponent(sphere);

        }
    }
};