// pseudocode for nikhilesh 

let poseList = []


function gotPoses(poses){

	poseList.push( poses[0] ) // only adds the first skeleton in 'poses'

	if ( poseList.length > 10 ) {

		// 'pop 'removes last element in list, so you are only working with 10 poses at a time
		poseList.pop()

	}

}

function drawFrameLines(poseList){

	for (var i = 0; i < poseList.length - 1; i ++){

		let j = i + 1 

		let pose01 = poseList[i] 
		let pose02 = poseList[j]

		for (var k = 0; k < pose01.length; k++ ){ // loop through all of the keypoints 

			let kp01 = pose01[k]
			let kp02 = pose02[k]

			drawLine(kp01,kp02) // create a function that draws lines between frames 



		}


	}


}

