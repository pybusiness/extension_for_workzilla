//Check if exist
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key].includes(value));
}
//Meta parameters
var data = {
    "telegram": ["телеграм", "телега", "telegram", "telega", "bot", "бот"],
    "any_site": ["сайт", "веб", "нужен сайт"]
};
//Text
var texts = {
    "telegram": "Здравствуйте! Я работаю с телеграммом больше 2 лет. Так как создание Дурова очень крутое). Всё делаю на самом популярном языке программирование - Python. Мои работы можете найти ввив в поиск в телеграм: @kvartira_kzn_bot @loftbar_bot @ImamDentist_bot \nТакже смогу создать бота в таких конструкторах, как https://watbot.ru/",
    "any_site": "Здравствуйте, 2 года уже работаю на этой сфере, раньше работал на upwork, freelancehunt. Сделал более 20 проектов. На бирже недавно зарегистрировался, поэтому не стоит обращать внимание на рейтинг.",
    "other": "Здравствуйте, 2 года уже работаю на этой сфере, раньше работал на upwork, freelancehunt. Сделал более 20 проектов. На бирже недавно зарегистрировался, поэтому не стоит обращать внимание на рейтинг. "
}
//Do clicks
setTimeout(function(){
    document.getElementsByClassName("order-in-list-link")[0].click();
    var opened = document.getElementsByClassName("slide-panel")[0].classList[2] == "opened";
    if(opened){
        
        var order = document.getElementsByClassName("external-links-wrapper")[0].getElementsByTagName("span")[0].innerText;
        var arr = order.split(/[\s,]+/);
        var meta = "null";
        for(var i = 0; i < arr.length; i++){
            if(getKeyByValue(data, arr[i])){
                meta = getKeyByValue(data, arr[i]);
                break;
            }
        }
        if(document.getElementById("price")){
            document.getElementById("price").value = 100;
        }
        var area = document.getElementsByClassName("resizable-textarea message-text-area")[0];
        area.select();
        area.value = "";
        var current = 0;
        var keyDown = new Event('keydown', {key: "A", keyCode: 65});
        if(meta in data){
            area.value = texts[meta];
        }else{
            area.value = texts["other"];
        }
        let kEvent = new KeyboardEvent("keypress", {
            key: "z"
        });
        document.getElementsByClassName("resizable-textarea message-text-area")[0].dispatchEvent(kEvent);
        document.getElementsByClassName("answer-accept")[0].click();
    }
}, 3000)