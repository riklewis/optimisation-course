$(function() {
  if(self!==top) {
    top.location = self.location;
  }
});

function debug(str) {
  console.log("Optimisation: "+str);
}
