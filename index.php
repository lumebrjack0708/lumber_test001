<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>練習4</title>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <script type="module" src="./index.js"></script>
</head>
<body>
    <div id="root">
        <table border="1"> 
            <tr>
                <td rowspan="2">商品編號</td>
                <td colspan="3">1月</td>
                <td colspan="3">2月</td>
                <td colspan="3">3月</td>
                <td rowspan="2">總數量</td>
            </tr>
            <tr>
                <td>成本</td>
                <td>售價</td>
                <td>數量</td>
                <td>成本</td>
                <td>售價</td>
                <td>數量</td>
                <td>成本</td>
                <td>售價</td>
                <td>數量</td>
            </tr>
            <?php 
                $a = 1;
                while ($a <= 10) {
                    echo'
                        <tr>
                            <td>'.$a.'</td>
                            <td id="m1_cost'.$a.'">'.rand(0, 100).'</td>
                            <td id="m1_price'.$a.'">'.rand(0, 100).'</td>
                            <td><input type="text" value="'.rand(0, 10).'" size="1" id="m1_conunt'.$a.'"></td>
                            <td id="m2_cost'.$a.'">'.rand(0, 100).'</td>
                            <td id="m2_price'.$a.'">'.rand(0, 100).'</td>
                            <td><input type="text" value="'.rand(0, 10).'" size="1" id="m2_conunt'.$a.'"></td>
                            <td id="m3_cost'.$a.'">'.rand(0, 100).'</td>
                            <td id="m3_price'.$a.'">'.rand(0, 100).'</td>
                            <td><input type="text" value="'.rand(0, 10).'" size="1" id="m3_conunt'.$a.'"></td>
                            <td id="p1totalcount'.$a.'"></td>
                        </tr>
                    ';
                    $a = $a + 1;
                    // echo'

                    // ';
                }
            ?> 
            <tr>
                <td>營業額</td>
                <td colspan="3" id="month1"></td>
                <td colspan="3" id="month2"></td>
                <td colspan="3" id="month3"></td>
                <td>總營業額</td>
            </tr>
            <tr>
                <td>盈餘</td>
                <td colspan="3" id="month1_fish"></td>
                <td colspan="3" id="month2_fish"></td>
                <td colspan="3" id="month3_fish"></td>
                <td>總盈餘</td>
            </tr>
        </table>
        <button id="btn">計算</button>
    
    </div>
</body>
</html>