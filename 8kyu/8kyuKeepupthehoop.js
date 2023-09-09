/*Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".
Алекс только что купил новый обруч, он ему нравится, но он расстроен, потому что его младший брат лучше его.
Напишите программу, в которой Алекс может ввести (n), сколько раз обруч пройдет круг, и она вернет ему обнадеживающее сообщение :)
Если Алекс наберет 10 или более обручей, верните строку «Отлично, теперь переходим к трюкам».
Если он не наберет 10 обручей, верните строку «Продолжайте, пока не получите».
 */
function hoopCount (n) {
    if(n >= 10){
        return('Great, now move on to tricks')
    }else if(n < 10){
        return('Keep at it until you get it')
    }
}