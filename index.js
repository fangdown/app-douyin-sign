
const querystring = require('querystring')
const request = require('request');
const { getSignature } = require('./signInfo')
const { USERAGENT } = require('./constance')
async function task(uid) {
  let { signature, dytk } = await getSignature(uid)
  const param = {
    user_id: uid,
    count: 2,
    max_cursor: 0,
    aid: 1128,
    sec_uid: '',
    _signature: signature,
    dytk
  }
  const data = await getVideo(param)
  console.log('data', data);
  return data
}
// 验证视频列表
async function getVideo(param) {
  let options = {
    url: `https://www.iesdouyin.com/web/api/v2/aweme/post/?${querystring.stringify(param)}`,
    headers: {
      "user-agent": USERAGENT
    },
  }
  return new Promise(resolve => {
    try {
      request(options, (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        resolve(res.body.toString())
      })
    } catch (error) {
      console.log('error', error);

    }
  })
};

task('59220068103')

// console.log('tac', tac)