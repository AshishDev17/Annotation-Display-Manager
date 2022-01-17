# Application Display Manager
The Annotation Display Manager algorithm takes two arguments, current time of the player and annotation tracks in the content. This algorithm when invoked inside the timeUpdate event callback, flattens the array of annotation tracks and filter them. The filtered result is an array of annotations whose start time or end time is equal to the current time. Then it invokes show or hide function of each annotation depending on the current time equality with start time or end time. Also, if start time of an annotation is equal to its end time, then show and hide function both will be invoked.


## Test Application Display Manager
In the root folder, run ```npm install``` to install node modules (Jest is being used for unit test cases).

To test the the Annotation Display Manager, run ```npm run test``` to see the test results.
