/**
 * The default luckysheet config object.
 */
export default {
    container: "luckysheet",  //Container ID
    column: 60,  //Default number of columns for empty tables
    row: 84,  //Default row data amount for empty table
    allowCopy: true,  //Whether to allow copy
    showtoolbar: true,  //Whether to display the toolbar in the second column
    showinfobar: true,  //Whether to show the top name bar
    showsheetbar: true,  //Whether to display the bottom table name area
    showstatisticBar: true, //Whether to show the bottom count bar
    pointEdit: false,  //Whether it is the editor insert table mode
    pointEditUpdate: null,  //Editor table update function
    pointEditZoom: 1,  //Scaling ratio during editor table editing
    // menu: "undo|redo|freezenrow|freezencolumn|download|share|chart|pivot",
    data: [{ "name": "Sheet1", color: "", "status": "1", "order": "0", "data": [], "config": {}, "index":0 }, { "name": "Sheet2", color: "", "status": "0", "order": "1", "data": [], "config": {}, "index":1  }, { "name": "Sheet3", color: "", "status": "0", "order": "2", "data": [], "config": {}, "index":2  }], //客户端sheet数据[shee1, sheet2, sheet3]
    title: "Luckysheet", //Table's name
    userInfo: '<i style="font-size:16px;color:#ff6a00;" class="fa fa-taxi" aria-hidden="true"></i> rabbit', //User information display style in the upper right corner
    userMenuItem: [{url:"", "icon":'<i class="fa fa-folder" aria-hidden="true"></i>', "name":"My form"}, {url:"www.baidu.com", "icon":'<i class="fa fa-sign-out" aria-hidden="true"></i>', "name":"sign out"}], //Click the pop-up menu of user information in the upper right corner
    myFolderUrl: "",  //The upper left corner <link to the back button
    config: {},  //Table row height, column width, merged cells, formula and other settings
    fullscreenmode: true, //Whether it is full-screen mode. In non-full-screen mode, the mark box will not be forced to be selected.
    devicePixelRatio: window.devicePixelRatio,  //Equipment ratio, the larger the ratio, the higher the sub-standard rate of the table
    allowEdit: true,  //Whether to allow front-end editing
    loadUrl: "",  //Configure the address of loadUrl. Luckysheet will request form data through Ajax. By default, all data in the sheet data with status 1 will be loaded, and the rest of the sheets will load all fields except the data field.
    loadSheetUrl: "",  //Configure the address of loadSheetUrl, the parameters are gridKey (table primary key) and index (sheet primary key collection, the format is [1,2,3]), the returned data is the sheet data field data collection
    gridKey: "",  //Table unique identifier
    updateUrl: "", //Update address of table data
    updateImageUrl: "", //Update address of thumbnail
    allowUpdate: false, //Whether to allow background updates after editing
    functionButton: "", //右上角功能按钮，例如'<button id="" class="btn btn-primary" style="padding:3px 6px;font-size: 12px;margin-right: 10px;">下载</button>    <button id="" class="btn btn-primary btn-danger" style="    padding:3px 6px;    font-size: 12px;    margin-right: 10px;">分享</button>    <button id="luckysheet-share-btn-title" class="btn btn-primary btn-danger" style="    padding:3px 6px;    font-size: 12px;    margin-right: 10px;">秀数据</button>'
    showConfigWindowResize: true, //The configuration of the chart and pivot table will pop up on the right side, set whether the table will automatically indent after popping up
    enableAddRow: true,  //Allow additional rows
    enableAddCol: true,  //Allow adding columns
    enablePage: false,  //Allow to load next page
    autoFormatw: false,  //Automatically format numbers exceeding 4 digits into hundreds of millions of formats Example: true or "true" or "TRUE"
    accuracy: undefined,  //Set the exact number of digits of the transmitted value, n digits after the decimal point. The parameter is a number or a string of numbers, for example: "0" or 0
    pageInfo:{
        'queryExps':'',
        'reportId':'',
        'fields':'',
        'mobile':'',
        'frezon':'',
        'currentPage':'',
        "totalPage":10,
        "pageUrl":"",
    },
    editMode: false, //Is it in edit mode
    chartConfigChange: null,  //Custom method for triggering chart update in chart plugin
    beforeCreateDom: null,  //Method before table creation
    fireMousedown: null,  //Cell data drill down
    lang: 'en',  //language
    plugins: [],  //plugins, e.g. ['chart']
}