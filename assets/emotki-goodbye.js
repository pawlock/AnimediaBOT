module.exports = {
  async random(){
    var emotki = ['<a:Illya:855042627904864266> ','<:Itaiyo:855040534732472320>','<a:PanicDepression:889601804969578536>','<:PepeHands:861718893596770304>','<:ShibaSad:855863673024413776>','<:alejakto:855178099061686273>','<a:bakabaka:869688428818759741>','<:cry:855179021234733056>','<a:kleerage:869688434682380288>','<:zalamka:855153816991170560>']
    const random = Math.floor(Math.random() * 10);
    return emotki[random];
  }
}