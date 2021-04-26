var Body = {
    setColor:function (color){
        $('body').css('color', color)
    },
    setBackgroundColor:function (color){
        $('body').css('backgroundColor', color)
    }
}
function setColor(bg_color, color, title_color){
    Body.setColor(color)
    Body.setBackgroundColor(bg_color)

    // var link_list = document.querySelectorAll('a')

    // for (var i=0; i<link_list.length; i++)
    // {
    //     link_list[i].style.color = title_color
    // }

    // jQuery 사용하기
    $('a').css('color', color);
}
function day_night_toggle(self){
    if (self.value == 'night')
    {
        self.value = 'day'
        setColor('black', 'white', 'powderblue')
    }
    else
    {
        self.value = 'night'
        setColor('white', 'black', 'blue')
    }
}