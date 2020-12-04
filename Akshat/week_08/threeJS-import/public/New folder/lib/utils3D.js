const utils3D = {

    loadGLTF: function(params) {

        const { filename, filepath, scale, position, material, name } = params

        return new Promise((resolve, reject) => {

            const loader = new THREE.GLTFLoader().setPath(filepath)

            loader.load(filename, function(gltf) {

                for (elem of gltf.scene.children) {

                    elem.scale.set(scale, scale, scale)
                    elem.position.set(position.x, position.y, position.z)
                    elem.material = material
                    elem.castShadow = true
                    elem.recieveShadow = true
                    if (name) elem.name = name
                }
                resolve(gltf.scene.children)
            })
        })
    },

    loadOBJfromText: function(params) {

        const { text, scale, position, material, name } = params

        return new Promise((resolve, reject) => {

            const loader = new THREE.OBJLoader()

            loader.loadFromText(text, function(object) {

                const child = object.children[0]

                child.rotateX(-Math.PI / 2)
                child.rotateZ(-Math.PI / 2)

                child.material = material

                child.scale.set(scale, scale, scale)
                child.position.set(position.x, position.y, position.z)

                resolve(child)

            })

        })

    },

    loadOBJ: function(params) {

        const { filename, filepath, scale, position, material, name } = params

        return new Promise((resolve, reject) => {

            const loader = new THREE.OBJLoader()

            loader.load(filepath + filename, function(object) {

                const child = object.children[0]


                child.rotateX(-Math.PI / 2)
                child.rotateZ(-Math.PI / 2)

                child.scale.set(scale, scale, scale)
                child.position.set(position.x, position.y, position.z)

                resolve(child)

            })

        })

    },

    loadFBXfromText: function(params) {

        const { text, scale, position, material, name } = params

        return new Promise((resolve, reject) => {

            const loader = new THREE.FBXLoader()

            loader.loadFromText(text, function(object) {

                object.rotateX(-Math.PI / 2)
                object.rotateZ(-Math.PI / 2)

                object.scale.set(scale, scale, scale)
                object.position.set(position.x, position.y, position.z)

                resolve(object)

            })

        })

    },

    loadFBX: function(params) {

        const { filename, filepath, scale, position, material, name } = params

        return new Promise((resolve, reject) => {

            const loader = new THREE.FBXLoader()

            loader.load(filepath + filename, function(object) {



                object.rotateX(-Math.PI / 2)
                object.rotateZ(-Math.PI / 2)

                object.scale.set(scale, scale, scale)
                object.position.set(position.x, position.y, position.z)

                resolve(object)

            })

        })

    },

    // returns a shape from an array of 2D points
    makeShape: function(cell) {

        const shape = new THREE.Shape();
        var o = cell[0] // origin of the shape

        if (o) {

            shape.moveTo(o.x, -o.z)

            for (var i = 1; i < cell.length; i++) {

                var pt = cell[i]
                shape.lineTo(pt.x, -pt.z)
            }

            shape.lineTo(o.x, -o.z)
            return shape
        }
    },

    getExtrudeSettings: function(depth) {

        return {
            bevelEnabled: false,
            depth: depth
        }
    },

    getExtrudedMesh: function(params) {

        const {
            shapePts,
            holePts,
            depth,
            material,
            posVec,
            rotVec,
            scaleVec,
            centerPt,
            name
        } = params

        const shape = this.makeShape(shapePts)
        if (holePts) {
            if (holePts.length) shape.holes.push(this.makeShape(holePts.reverse()))
        }

        const geometry = new THREE.ExtrudeGeometry(shape, utils3D.getExtrudeSettings(depth))
        geometry.rotateX(-Math.PI / 2)

        if (rotVec) {

            if (centerPt) geometry.translate(-centerPt.x, -centerPt.y, -centerPt.z)
            if (rotVec) geometry.rotateY(rotVec.y)
            if (scaleVec) geometry.scale(scaleVec.x, 1, scaleVec.z)
            if (centerPt) geometry.translate(centerPt.x, centerPt.y, centerPt.z)
        }

        if (posVec) geometry.translate(posVec.x, posVec.y, posVec.z)

        const mesh = new THREE.Mesh(geometry, material)
        if (name) mesh.name = name

        mesh.side = THREE.DoubleSide
        mesh.receiveShadow = true
        mesh.castShadow = true

        return mesh;
    },

    getExtrudedMeshAndLineSegs: function(params) {

        const {
            shapePts,
            holePts,
            depth,
            meshMat,
            lineMat,
            posVec,
            rotVec,
            scaleVec,
            centerPt,
            meshName,
            lineSegName
        } = params

        const shape = this.makeShape(shapePts)
        if (holePts) {
            if (holePts.length) shape.holes.push(this.makeShape(holePts.reverse()))
        }

        const geometry = new THREE.ExtrudeGeometry(shape, utils3D.getExtrudeSettings(depth))
        geometry.rotateX(-Math.PI / 2)

        if (rotVec || scaleVec) {

            if (centerPt) geometry.translate(-centerPt.x, -centerPt.y, -centerPt.z)
            if (rotVec) geometry.rotateY(rotVec.y)
            if (scaleVec) geometry.scale(scaleVec.x, 1, scaleVec.z)
            if (centerPt) geometry.translate(centerPt.x, centerPt.y, centerPt.z)
        }

        if (posVec) geometry.translate(posVec.x, posVec.y, posVec.z)

        const mesh = new THREE.Mesh(geometry, meshMat)
        if (meshName) mesh.name = meshName
        mesh.side = THREE.DoubleSide
        mesh.receiveShadow = true
        mesh.castShadow = true

        const edges = new THREE.EdgesGeometry(geometry)
        const lineSegs = new THREE.LineSegments(edges, lineMat)

        if (lineSegName) lineSegs.name = lineSegName

        return { mesh: mesh, lineSegs: lineSegs };
    },

    getMeshLine: function(params) {

        const { vertices, material } = params
        const geom = new THREE.Geometry().setFromPoints(vertices)

        const meshLine = new MeshLine()
        meshLine.setGeometry(geom)

        return new THREE.Mesh(meshLine.geometry, material)

    },

    alignMesh: function(lookAtDir, pos, mesh) {

        mesh.position.add(pos);
        mesh.lookAt(new THREE.Vector3(lookAtDir.x, lookAtDir.y, lookAtDir.z))

        return mesh

    },

    flattenGroup: function(group, recursive) { // group can be the entire scene
        group.updateMatrixWorld();
        var again;

        do {
            again = false;

            group.children.slice().reverse().forEach(function(parent) {

                parent.children.slice().reverse().forEach(function(child) {

                    again = true;

                    parent.remove(child);
                    child.applyMatrix(parent.matrix);
                    group.add(child);
                });

            });

        } while (again && recursive);

        group.children.slice().reverse().forEach(function(child) {

            if (child.type == 'Group') {

                if (child.children.length == 0) {

                    group.remove(child);

                } else {

                    console.log("group still has children")

                }
            }
        });
    }

}
