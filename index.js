// 引入外部模組
import cal_in_ya from "./cal_in_ya.js";
import calculateCost from "./calculateCost.js";

// 處理事件
window.onload = function(){
    document.getElementById('btn').onclick = function(){
        // 計算總數量(O
        for (var a = 1; a <= 10; a++) {
            var totalcount = 0;

            for (var i = 1; i <= 3; i++) {
                var count = parseInt(document.getElementById('m'+i+'_conunt'+a).value);
                totalcount += count;
            }
            document.getElementById('p1totalcount'+a).innerHTML = totalcount;
        }


        // 計算營業額(O
        var month1 = cal_in_ya(1);
        var month2 = cal_in_ya(2);
        var month3 = cal_in_ya(3);

        // 把每個月營業額塞進表格　(O
        document.getElementById('month1').innerHTML = month1;
        document.getElementById('month2').innerHTML = month2;
        document.getElementById('month3').innerHTML = month3;


        // 拿成本  (還在改  改好了幹
        var month1Cost = calculateCost(1);
        var month2Cost = calculateCost(2);
        var month3Cost = calculateCost(3);

        // 算盈餘(O
        var month1_fish = month1 - month1Cost;
        var month2_fish = month2 - month2Cost;
        var month3_fish = month3 - month3Cost;

        // 將每個月份的盈餘顯示在表格中(O
        console.log(month1_fish,month2_fish,month3_fish)
        document.getElementById('month1_fish').innerHTML = month1_fish;
        document.getElementById('month2_fish').innerHTML = month2_fish;
        document.getElementById('month3_fish').innerHTML = month3_fish;

    }
}