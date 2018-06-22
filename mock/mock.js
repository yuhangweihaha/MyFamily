/**
 * Created by yuyu on 2018/5/17.
 */
import axios from 'axios'
import AxiosAdapter from 'axios-mock-adapter'
function random(min, max) {
  return Math.floor(Math.random() * max - min)+min
}
let timer;
function delay(data) {
  return function(){
    return new Promise(function (resolve, reject) {
      timer = setTimeout(() => {
        resolve([200, data])
        clearTimeout(timer)
      }, random(0, 3500))
    })
  }
}
function delay2(data) {
  return new Promise(function (resolve, reject) {
    timer = setTimeout(() => {
      resolve([200, data])
      clearTimeout(timer)
    }, random(1000, 5000))
  })
}

let mocker = new AxiosAdapter(axios);

import getGoodsChannel1 from '../service/goodsChannel.json';
import getGoodsChannel2 from '../service/goodChannel2.json';
mocker.onPost('/mall/index/getGoodsChannel').reply(config=>{
  let data = JSON.parse(config.data);
  let channel_id =data.channel_id;
  switch(channel_id){
    case 1:delay2(getGoodsChannel1);
      break;
    case 2:delay2(getGoodsChannel2);
      break;
  }
});
