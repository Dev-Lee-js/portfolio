const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name:{
        type:String, // name이라는 데이터를 얻어올때 문자열로 얻어온다.
        maxlength:50 // 최대길이는 50까지 제한한다.
    },
    email:{
        type:String,
        trim:true, // 공백을 자동으로 없애준다.
        unique:1 // 똑같은 email은 쓰지못하게 제한한다.
    },
    password:{
        type:String,
        minlength:5
    },
    token:{
        type:String
    },
    tokenExp:{
        type:Number // 숫자 형식으로 데이터를 얻어온다
    }

})

const User = mongoose.model("User", userSchema) 
// User라는 이름으로 우리가 만든 userSchema를 model로 감싸주고 그걸 User변수에 넣습니다.
// mongoose.model()을 호출할 때(const User = mongoose.model()) 스키마가 등록됩니다.

module.exports = User // 생성한 스키마를 다른곳에서 사용할 수 있게 User라는 이름으로 내보냅니다.

