var utils = {

    randomIndex: function(range) {

        return Math.round(Math.random() * range)

    },

    shoelace: function(polygon) {

        let len = polygon.length
        var sum = 0
        var a = b = c = 0

        for (var i = 0; i < len; i++) {
            a = polygon[mod(i, len)].x + polygon[mod(i + 1, len)].x
            b = polygon[mod(i + 1, len)].z - polygon[mod(i, len)].z
            c = a * b
            sum += c
        }

        return sum
    },

    getShape: function(cell) {

        var shape = new THREE.Shape();
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

    inside: function(point, vs) {

        var x = point.x,
            y = point.z

        let inside = false

        for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
            var xi = vs[i].x,
                yi = vs[i].z
            var xj = vs[j].x,
                yj = vs[j].z

            var intersect = ((yi > y) != (yj > y)) &&
                (x < (xj - xi) * (y - yi) / (yj - yi) + xi)
            if (intersect) inside = !inside
        }

        return inside
    },

    //arrPt is one that is not three js but of format [2,4,0] ie. not object

    avg_arrPt: function(arrPt_arr) {

        let sum_x = sum_y = sum_z = 0
        let len = arrPt_arr.length

        for (arrPt of arrPt_arr) {

            sum_x += arrPt[0]
            sum_y += arrPt[1]
            sum_z += arrPt[2]

        }

        sum_x /= len
        sum_y /= len
        sum_z /= len

        return [sum_x, sum_y, sum_z]

    },

    avg_Pt: function(pt_arr, yOverride) {

        let sum_x = sum_y = sum_z = 0
        let len = pt_arr.length

        for (pt of pt_arr) {

            sum_x += pt.x
            sum_y += pt.y
            sum_z += pt.z

        }

        sum_x /= len
        sum_y /= len
        sum_z /= len

        if (yOverride !== undefined && yOverride !== null) sum_y = yOverride

        return new THREE.Vector3(sum_x, sum_y, sum_z)

    },

    find_avg_btmPt: function(vertices) {

        let temp_arr = []

        for (vertex of vertices) {

            if (vertex.y == 0) temp_arr.push(vertex)

        }

        return this.avg_Pt(temp_arr)

    },

    getLinePoint: function(x1, y1, x2, y2, t) {

        let x = (x1 - x2) * t + x2
        let y = (y1 - y2) * t + y2

        return new THREE.Vector3(x, 0.75, y)

    },


    get2PtAngle: function(x1, y1, x2, y2) {

        var p1 = { x: x1, y: y1 }
        var p2 = { x: x2, y: y2 }
        // angle in radians
        var angleRadians = Math.atan2(p2.y - p1.y, p2.x - p1.x);
        // angle in degrees
        var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;

        return angleRadians
    },

    get2PtDistance: function(x1, y1, x2, y2) {

        var xs = x2 - x1;
        var ys = y2 - y1;

        xs *= xs;
        ys *= ys;

        return Math.sqrt(xs + ys);

    },

    getLineSegments(verts) {
        // returns array of line segments from a closed polyline 

        let arr = []

        for (var i = 0; i < verts.length - 1; i++) {

            arr.push([verts[i], verts[i + 1]])

        }

        if (verts[0] != verts[verts.length - 1]) {

            arr.push([verts[0], verts[verts.length - 1]])
        }

        return arr
    },

    measure: function(lat1, lng1, lat2, lng2) {

        var R = 6378.137; // Radius of earth in KM
        var dLat = (lat2 - lat1) * Math.PI / 180;
        var dLng = (lng2 - lng1) * Math.PI / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;

        return d * 1000; // meters

    },

    getAABB: function(pList) {

        let bAreas = []

        const step = 3

        for (var i = 0; i < 360; i += step) {

            let area = utils.boundingRect_fromPts(pList, i).area()

            bAreas.push(area)
        }

        let angle = bAreas.indexOf(Math.min(...bAreas)) * step
        let bRect = utils.boundingRect_fromPts(pList, angle)

        bRect.angle = angle

        console.log(bRect.angle)
        return bRect

    },

    boundingRect_fromPts: function(pts, ang) {


        // console.log( "Pts are:: ", pts )
        if (!pts.length) return null
        let midPt = utils.midpoint_mult(pts)

        let rotPts = utils.rotPts2D(pts, ang, midPt)

        pts = [...rotPts]

        let minX = maxX = pts[0].x
        let minZ = maxZ = pts[0].z

        pts.forEach((pt) => {

            maxX < pt.x ? maxX = pt.x : maxX
            maxZ < pt.z ? maxZ = pt.z : maxZ
            minX > pt.x ? minX = pt.x : minX
            minZ > pt.z ? minZ = pt.z : minZ
        })

        let boundingPts = [

            new THREE.Vector3(minX, 0, minZ),
            new THREE.Vector3(minX, 0, maxZ),
            new THREE.Vector3(maxX, 0, maxZ),
            new THREE.Vector3(maxX, 0, minZ)
        ]

        let tempBndPt = utils.rotPts2D(boundingPts, -ang, midPt)
        boundingPts = [...tempBndPt]

        let bRect = {

            points: boundingPts,
            len: Math.abs(maxX - minX),
            wid: Math.abs(maxZ - minZ),
            area: function() {
                return this.len * this.wid
            }
        }
        return bRect
    },

    midpoint_mult: function(pList) {
        // returns average point between multiple points
        var listLen = pList.length
        var sumX = sumY = sumZ = 0
        // var avg = new THREE.Vector3(0,0,0)

        for (var i = 0; i < pList.length; i++) {

            var element = pList[i]
            // ?            avg.add(element)
            sumX += element.x
            sumY += element.y
            sumZ += element.z

        }

        avgX = sumX / listLen
        avgY = sumY / listLen
        avgZ = sumZ / listLen

        // var k = 1/listLen

        // return avg.multiplyScalar(k)

        return new THREE.Vector3(avgX, avgY, avgZ)
    },

    rotPts2D: function(pts, ang, anchor) {

        let rotPts = []

        pts.forEach((pt) => {

            let oVec = utils.lineVec(anchor, pt)
            let rotVec = utils.rotVec2D(oVec, ang)
            // PlotOps.print(rotVec)
            let newVec = new THREE.Vector3(anchor.x + rotVec.x, anchor.y + rotVec.y, anchor.z + rotVec.z)
            rotPts.push(newVec)
        })
        return rotPts
    },

    lineVec: function(p1, p2) {

        let nx = p2.x - p1.x
        let ny = p2.y - p1.y
        let nz = p2.z - p1.z
        return new THREE.Vector3(nx, ny, nz)
    },

    rotVec2D: function(v, ang) {

        var x = v.x * Math.cos(rad(ang)) - v.z * Math.sin(rad(ang))
        var z = v.x * Math.sin(rad(ang)) + v.z * Math.cos(rad(ang))

        return new THREE.Vector3(x, v.y, z)
    },

    divideLine: function(p1, p2, spacing) {

        let length = lineLength(p1, p2)
        let step = 1 / spacing
        let arr = []


        for (let t = 0; t <= 1; t += step) {

            nx = (p2.x - p1.x) * t
            ny = (p2.y - p1.y) * t
            nz = (p2.z - p1.z) * t

            px = p1.x + nx
            py = p1.y + ny
            pz = p1.z + nz

            arr.push({
                x: px,
                y: py,
                z: pz
            })

        }

        return arr
    },

    addVector: function(a, b) {

        let nx = a.x + b.x
        let ny = a.y + b.y
        let nz = a.z + b.z

        return {
            x: nx,
            y: ny,
            z: nz
        }
    },

    computeIntersection: function(a, b, c, d) {

        let e = utils.line_intersect(a.x, a.z, b.x, b.z, c.x, c.z, d.x, d.z)

        return {
            x: e.x,
            y: 0,
            z: e.y
        }
    },

    line_intersect: function(x1, y1, x2, y2, x3, y3, x4, y4) {

        var ua, ub, denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
        if (denom == 0) {
            return null;
        }
        ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
        ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denom;
        return {
            x: x1 + ua * (x2 - x1),
            y: y1 + ua * (y2 - y1),
            seg1: ua >= 0 && ua <= 1,
            seg2: ub >= 0 && ub <= 1
        };
    },

    generateGrid(xSpace, ySpace, bbox) {

        console.log('generate grid')

        let a = bbox.points[0]
        let b = bbox.points[1]
        let c = bbox.points[2]
        let d = bbox.points[3]

        let xAxis = utils.divideLine(bbox.points[0], bbox.points[1], xSpace)
        let yAxis = utils.divideLine(bbox.points[0], bbox.points[3], ySpace)

        let ba = {
            x: b.x - a.x,
            y: b.y - a.y,
            z: b.z - a.z
        }
        let ca = {
            x: d.x - a.x,
            y: d.y - a.y,
            z: d.z - a.z
        }

        let col = []

        for (var i = 0; i < xAxis.length; i++) {

            let vA = utils.addVector(xAxis[i], ca)

            let row = []

            for (var j = 0; j < yAxis.length; j++) {

                let vB = utils.addVector(yAxis[j], ba)
                let xSection = utils.computeIntersection(xAxis[i], vA, yAxis[j], vB)
                row.push(xSection)
            }
            col.push(row)
        }
        return col
    },

    checkBoundary: function(grid, polygon) {

        let poly = polygon.map(e => {
            return {
                x: e.x,
                y: e.z
            }
        })

        grid.forEach(row => row.forEach(e => {

            e.draw = insideY({
                x: e.x,
                y: e.z,
                vs: poly
            })
        }))
        return grid
    },


    getCore: function(params) {

        console.log('get core')

        let bbox = utils.getAABB(params.polygon)
        let centroid = getCentroid(bbox.points)

        let o = new THREE.Vector3(centroid.x, centroid.y, centroid.z)

        let a = bbox.points[0]
        let b = bbox.points[1]
        let c = bbox.points[2]
        let d = bbox.points[3]


        let e1 = new THREE.Vector3(b.x - a.x, b.y - a.y, b.z - a.z)
        let e2 = new THREE.Vector3(d.x - a.x, d.y - a.y, d.z - a.z)

        e1.normalize().multiplyScalar(25)
        e2.normalize().multiplyScalar(25)

        let p1 = new THREE.Vector3(e1.x + e2.x, 0, e1.z + e2.z)
        let p2 = new THREE.Vector3(-e1.x + e2.x, 0, -e1.z + e2.z)
        let p3 = new THREE.Vector3(-e1.x - e2.x, 0, -e1.z - e2.z)
        let p4 = new THREE.Vector3(e1.x - e2.x, 0, e1.z - e2.z, )

        p1.add(o)
        p2.add(o)
        p3.add(o)
        p4.add(o)


        let obj = {

            polygon: [p1, p2, p3, p4]
        }

        return obj

    }
}

function rad(degrees) {

    //deg to rad
    var pi = Math.PI
    return degrees * (pi / 180)
}

function lineLength(p1, p2) {

    let nx = p2.x - p1.x
    let ny = p2.y - p1.y
    let nz = p2.z - p1.z
    let len = Math.sqrt(nx * nx + ny * ny + nz * nz)

    return len

}


function insideY(params) {

    var x = params.x
    var y = params.y
    var vs = params.vs



    let inside = false

    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i].x,
            yi = vs[i].y
        var xj = vs[j].x,
            yj = vs[j].y


        var intersect = ((yi > y) != (yj > y)) &&
            (x < (xj - xi) * (y - yi) / (yj - yi) + xi)
        if (intersect) inside = !inside
    }



    return inside
}




function getCentroid(points) {

    // returns average point between multiple points

    let x = points.map(pt => pt.x)
    let y = points.map(pt => pt.y)
    let z = points.map(pt => pt.z)

    let sumX = x.reduce((a, b) => a + b, 0)
    let sumY = y.reduce((a, b) => a + b, 0)
    let sumZ = z.reduce((a, b) => a + b, 0)

    let avgX = sumX / x.length
    let avgY = sumY / y.length
    let avgZ = sumZ / z.length

    return {
        x: avgX,
        y: avgY,
        z: avgZ
    }
}