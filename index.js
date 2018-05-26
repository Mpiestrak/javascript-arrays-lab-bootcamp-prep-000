const app = "I don't do much."
function destructivelyAppendKitten (Ralph){
  kittens.push("Ralph")
}
function destructivelyPrependKitten(Bob){
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(Broom){
  [...kittens, "Broom"]
  var array = [...kittens, "Broom"]
  return array
}
function prependKitten()