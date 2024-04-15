export default function startpage() {
    const stpg = `
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
    `
    for (let i = 0; i < 10; i++) {
        stpg =
        `
            <tr>
                <td>${i}</td>
                <td id="m1_cost${i}">${Math.floor(Math.random()*100)}</td>
                <td id="m1_price${i}">${Math.floor(Math.random()*100)}</td>
                <td><input type="text" value="${Math.floor(Math.random()*10)}" size="1" id="m1_conunt${i}"></td>
                <td id="m2_cost${i}">${Math.floor(Math.random()*100)}</td>
                <td id="m2_price${i}">${Math.floor(Math.random()*100)}</td>
                <td><input type="text" value="${Math.floor(Math.random()*10)}" size="1" id="m2_conunt${i}"></td>
                <td id="m3_cost${i}">${Math.floor(Math.random()*100)}</td>
                <td id="m3_price${i}">${Math.floor(Math.random()*100)}</td>
                <td><input type="text" value="${Math.floor(Math.random()*10)}" size="1" id="m3_conunt${i}"></td>
                <td id="p1totalcount${i}"></td>
            </tr>
        `
    stpg +=
        `            
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
`
    }
    return stpg
}
