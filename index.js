#!/usr/bin/env node
const twStock = require('./src/function/twStock');
const commandColorUtils = require('./src/utils/commandColorUtils');
const checkPackageVerisonUtils = require('./src/utils/checkPackageVerisonUtils');
const dateUtils = require('./src/utils/dateUtils');

let argv = require('yargs/yargs')(process.argv.slice(2))
    .option('stock', {
        alias: 's',
        // demandOption: true,
        // boolean: true,
        describe: '找股票當月收盤  (首月第一天可能會故障要等收盤)  changchiakai-cli -s 2330',
        string: true
    })
    .option('realTime', {
        alias: 'r',
        // demandOption: true,
        // boolean: true,
        describe: '現價及當下總成量 changchiakai-cli -r 2330',
        string: true
    })
    .option('env', {
        alias: 'e',
        // demandOption: true,
        // boolean: true,
        describe: '環境參數',
        string: true
    })
    .option('month', {
        alias: 'm',
        // demandOption: true,
        // boolean: true,
        describe: ' --stock 搭配用 西元年月份  ex. changchiakai-cli -s 2330 -m 202010',
        default: "0",
        string: true
    })
    .help()
    .alias('help', 'h')
    .locale('zh_TW').argv
// console.log(":", argv);



if (!!argv.s || !!argv.stock) {
    const stockNo = argv.s;
   
    let queryYYYYMMDD =  (argv.m.length === 6 ? argv.m+'01' : dateUtils.getTodayYYYYMMDD()) 
    twStock.getTwStockForStockNo(stockNo, queryYYYYMMDD);
} else if (!!argv.r || !!argv.realTime) {
    const stockNo = argv.r;

    twStock.getTwStockForRealTime(stockNo);
} else {
    console.log(commandColorUtils.warn("請輸入指令  或是使用 -h 來看有甚麼指令能用"));
    // console.log(process.env.APPDATA);
    checkPackageVerisonUtils.checkVerison();
}
