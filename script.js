

function horoscope(){
    var month = parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    var sign = determineSign(parseInt(month), parseInt(day));
    var year = parseInt(document.getElementById("year").value);
    name = document.getElementById("name").value;
    //sign (month, day);
    console.log(typeof sign);
    document.getElementById("sign").innerHTML = getHoroscope(sign) + "<br>" + getZodiacNum(year);
    getImage(sign);

}


function determineSign(month, day){
    var sign = 0;
    if (month == 0 && day >= 19 || month == 1 && day <=  17){
        sign = 0;
    }
    if (month == 1 && day >= 18 || month == 2 && day <= 19){
        sign = 1;
    }
    if (month == 2 && day >= 20 || month == 3 && day <= 18){
        sign = 2;
    }
    if (month == 3 && day >= 19 || month == 4 && day <= 19) {
        sign = 3;
    }
    if (month == 4 && day >= 20 || month == 5 && day <= 19){
        sign = 4;
    }
    if (month == 5 && day >= 20 || month == 6 && day <= 21){
        sign = 5;
    }
    if (month == 6 && day >= 22 || month == 7 && day <= 21){
        sign = 6;
    }
    if (month == 7 && day >= 22 || month == 8 && day <= 21){
        sign = 7;
    }
    if (month == 8 && day >= 22 || month == 9 && day <= 21){
        sign = 8;
    }
    if (month == 9 && day >= 22 || month == 10 && day <= 20){
        sign = 9;
    }
    if (month == 10 && day >= 21 || month == 11 && day <= 20){
        sign = 10;
    }
    if (month == 11 && day >= 21 || month == 0 && day <= 18){
        sign = 11;
    }
    return sign;
}

function getHoroscope (sign){
    if (sign == 0){
        return "Aquarius: This November, " + name + ", your career will take up a significant " +
            "amount of your time and attention. Although you will be busy and " +
            "preoccupied it will be important not to completely neglect other aspects " +
            "of your life. You should still spend time with your partner if you are in " +
            "a relationship and you should still look after your health.";
    }
    if (sign == 1){
        return "Pisces: " + name + ", this November will be a turbulent month for you Pisces. " +
            "While your health and fitness will remain mostly the same, Unexpected " +
            "changes will force you to work under pressure at the office. At the " +
            "same time, new and exciting changes will occur in your relationship, " +
            "but they will still require more time and effort.";
    }
    if (sign == 2){
        return "Aries: This November is sure to be extremely " +
            "rewarding for you, " + name + ", if you allow it to be a month of " +
            "exploration. Self-reflect, try new things and take " +
            "risks this November. By stepping outside your comfort " +
            "zone you will begin to discover what you find most " +
            "fulfilling in your love life, career, and health.";
    }
    if (sign == 3){
        return "Taurus: " + name + ", you experience no major changes this November " +
            "until the very end of the month, and if you want to make " +
            "these changes happen at work, in your love life or in your " +
            "health and fitness routine, you have to spend some time making " +
            "them happen.";
    }
    if (sign == 4){
        return "Gemini: This November is a month of new beginnings for you, " + name + ". " +
            "You may have new romantic prospects or you may experience some " +
            "change in your current relationship. You may have the opportunity " +
            "to work on some novel and unfamiliar projects at work, and if you " +
            "so choose, this would be a good month to start a new fitness routine.";
    }
    if (sign == 5){
        return "Cancer: " + name + ", this November is a month of self-reflection as you examine " +
            "your shifting identity. You likely rediscover your values, tastes likes " +
            "and dislikes. During this process, you should embrace a certain degree " +
            "of uncertainty and keep an open mind. You may find yourself with opinions " +
            "that you never anticipated having.";
    }
    if (sign == 6){
        return "Leo: This November can kick off a period of growth and maturity for you, " + name + "." +
            " Take any opportunity to learn something new this month. If you are " +
            "experiencing relationship challenges, turn to family members for their " +
            "advice. At work take advantage of continuing education opportunities.";
    }
    if (sign == 7){
        return "Virgo: October may be a challenging month for you, " + name + ", especially " +
            "in the beginning. You may experience loss or other challenges in your " +
            "relationships, or you might have to handle a setback at work. Avoid falling " +
            "back on old bad habits and create new healthier stress reducing routines.";
    }
    if (sign == 8){
        return "Libra: " + name + ", for a productive November, you will need to organize your " +
            "life. You should start by figuring out what your priorities are. No one can " +
            "be and do everything all at once, and by accepting that you can't give a hundred " +
            "percent at all times, you will have some peace of mind.";
    }
    if (sign == 9){
        return "Scorpio: " + name + ", this October you should adopt a take charge attitude in your career " +
            "you love life and in your health. You will need to assess your needs and wants first," +
            " but once you have a plan you can set to work implementing it. A confident and " +
            "assertive attitude will bring your plans closer to realization.";
    }
    if (sign == 10){
        return "Sagittarius: This November some of your friendships may be tested, " + name + ", revealing " +
            "who your true friends are. At the end of the month, you will be much closer with " +
            "those friends who stuck with you. This conflict will likely occur when you have " +
            "some exciting success or news to share with your friends at the beginning of November.";
    }
    if (sign == 11){
        return "Capricorn: Hard work will pay off for you this November, " + name + ". Your efforts will be " +
            "uniquely effective this month and will be recognized by those around you, so set " +
            "loftier goals this Month. Your hard work will be extra effective so it makes sense " +
            "for you to have bigger plans.";
    }
}

function doDays(month){
    month = parseInt(month);
    var mDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var result = "";
    for (var i = 1; i <= mDays[month]; i++){
        result += "<option value='" + i + "'>" + i + "</option>";
    }
    document.getElementById("day").innerHTML = result;
}

function getImage(sign){
  var imageIndex=["aquarius.png", "pices.png", "aries.png", "taurus.png", "gemini.png", "cancer.png", "leo.png", "virgo.png",
  "libra.png", "scorpio.png", "sagittarius.png", "capricorn.png"];
  console.log(imageIndex[sign]);
  document.getElementById("image").innerHTML = "<img src='images/" + imageIndex[sign] + "'>";
}


function doZodiac(year){
    year = parseInt(year);
    var result = "";
    for (var i = 2017; i >= 1960; i--){
        result += "<option value='" + i + "'>" + i + "</option>";
    }
    document.getElementById("year").innerHTML = result;
}


function getZodiacNum (year){
    var zodiac = 0;
    if (year == 1960 || year == 1972 || year == 1984 || year ==  1996 || year == 2008){
        return "Your Chinese Zodiac: Rat";
    }
    if (year == 1961 || year == 1973 || year == 1985 || year == 1997 || year == 2009){
        return "Your Chinese Zodiac: Ox";
    }
    if (year == 1962 || year == 1974 || year == 1986 || year == 1998 || year == 2010){
        return "Your Chinese Zodiac: Tiger";
    }
    if (year == 1963 || year == 1975 || year == 1987 || year == 1999 || year == 2011){
        return "Your Chinese Zodiac: Rabbit";
    }
    if (year == 1964 || year == 1976 || year == 1988 || year == 2000 || year == 2012){
        return "Your Chinese Zodiac: Dragon";
    }
    if (year == 1965 || year == 1977 || year == 1989 || year == 2001 || year == 2013){
        return "Your Chinese Zodiac: Snake";
    }
    if (year == 1966 || year == 1978 || year == 1990 || year == 2002 || year == 2014){
        return "Your Chinese Zodiac: Horse";
    }
    if (year == 1967 || year == 1979 || year == 1991 || year == 2003 || year == 2015){
        return "Your Chinese Zodiac: Sheep";
    }
    if (year == 1968 || year == 1980 || year == 1992 || year == 2004 || year == 2016){
        return "Your Chinese Zodiac: Monkey";
    }
    if (year == 1969 || year == 1981 || year == 1993 || year == 2005 || year == 2017){
        return "Your Chinese Zodiac: Rooster";
    }
    if (year == 1970 || year == 1982 || year == 1994 || year == 2006){
        return "Your Chinese Zodiac: Dog";
    }
    if (year == 1971 || year == 1983 || year == 1995 || year == 2007){
        return "Your Chinese Zodiac: Pig";
    }
}

