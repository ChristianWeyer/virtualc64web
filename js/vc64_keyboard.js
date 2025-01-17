function translateKey(keycode, key)
{
    console.log('keycode='+keycode + ', key='+key);
    var mapindex;
    var sym_key = symbolic_map[key];
    if(sym_key!== undefined && !Array.isArray(sym_key))
    {//if there is a symbolic mapping ... use it instead of the positional mapping
        mapindex=key_translation_map[ sym_key ];
    } 
    else
    {//when there is no symbolic mapping fall back to positional mapping
        mapindex=key_translation_map[ keycode ];
    }
    c64code=c64keymap[mapindex];
    return c64code;
}

function translateKey2(keycode, key)
{
    console.log('keycode='+keycode + ', key='+key);
    var mapindex;
    var sym_key = symbolic_map[key];
    var raw_key_with_modifier = { modifier: null,  raw_key: null };

    if(sym_key!== undefined)
    {//if there is a symbolic mapping ... use it instead of the positional mapping
        if(Array.isArray(sym_key))
        {
            mapindex=key_translation_map[ sym_key[0] ];
            raw_key_with_modifier.modifier = c64keymap[mapindex];

            mapindex=key_translation_map[ sym_key[1] ];
            raw_key_with_modifier.raw_key = c64keymap[mapindex];
        }
        else
        {
            mapindex=key_translation_map[ sym_key];
            raw_key_with_modifier.raw_key = c64keymap[mapindex];
        }
    } 
    else
    {//when there is no symbolic mapping fall back to positional mapping
        mapindex=key_translation_map[ keycode ];
        raw_key_with_modifier.raw_key = c64keymap[mapindex];
    }
    return raw_key_with_modifier;
}


symbolic_map = {
    a: 'KeyA',
    b: 'KeyB',
    c: 'KeyC',
    d: 'KeyD',
    e: 'KeyE',
    f: 'KeyF',
    g: 'KeyG',
    h: 'KeyH',
    i: 'KeyI',
    j: 'KeyJ',
    k: 'KeyK',
    l: 'KeyL',
    m: 'KeyM',
    n: 'KeyN',
    o: 'KeyO',
    p: 'KeyP',
    q: 'KeyQ',
    r: 'KeyR',
    s: 'KeyS',
    t: 'KeyT',
    u: 'KeyU',
    v: 'KeyV',
    w: 'KeyW',
    x: 'KeyX',
    z: 'KeyZ',
    y: 'KeyY',

    f1: 'F1',
    f2: 'F2',
    f3: 'F3',
    f4: 'F4',
    f5: 'F5',
    f6: 'F6',
    f7: 'F7',
    f8: 'F8',
    ',': 'Comma',
    '*': 'BracketRight', 
    '$': ['ShiftLeft','Digit4'],
    "1": 'Digit1',
    "2": 'Digit2',
    "3": 'Digit3',
    "4": 'Digit4',
    "5": 'Digit5',
    "6": 'Digit6',
    "7": 'Digit7',
    "8": 'Digit8',
    "9": 'Digit9',
    "0": 'Digit0',
    ' ': 'Space',
    ':': 'Semicolon',
    '.': 'Period',
    ';': 'Quote',
    '=': 'Backslash', 
    '"': ['ShiftLeft','Digit2'],
    'shiftrunstop': ['ShiftLeft','runStop']   //load from tape shortcut
}

c64keymap = [
            // First physical key row
            [7, 1], [7, 0], [7, 3], [1, 0], [1, 3], [2, 0], [2, 3], [3, 0],
            [3, 3], [4, 0], [4, 3], [5, 0], [5, 3], [6, 0], [6, 3], [0, 0],
            [0, 4] /* f1 */,
            
            // Second physical key row
            [7, 2], [7, 6], [1, 1], [1, 6], [2, 1], [2, 6], [3, 1], [3, 6],
            [4, 1], [4, 6], [5, 1], [5, 6], [6, 1], [6, 6], [9, 9], [0, 5] /* f3 */,

            // Third physical key row
            [7, 7], [9, 9], [1, 2], [1, 5], [2, 2], [2, 5], [3, 2], [3, 5],
            [4, 2], [4, 5], [5, 2], [5, 5], [6, 2], [6, 5], [0, 1], [0, 6] /* f5 */,
            
            // Fourth physical key row
            [7, 5], [1, 7], [1, 4], [2, 7], [2, 4], [3, 7], [3, 4], [4, 7],
            [4, 4], [5, 7], [5, 4], [6, 7], [6, 4], [0, 7], [0, 2], [0, 3] /* f7 */,
            
            // Fifth physical key row
            [7, 4] /* space */
        ]

key_translation_map =  
        {

    // First row
    Backspace:15,
    Enter:47,
    ArrowLeft:63,
    ArrowRight:63,
    F7:64,
    F8:64,
    F1:16,
    F2:16,
    F3:32,
    F4:32,
    F5:48,
    F6:48,
    ArrowUp:62,
    ArrowDown:62,
    
    // Second row
    Digit3: 3,
    KeyW:19,
    KeyA:35,
    Digit4:4,
    KeyZ:51,
    KeyS:36,
    KeyE:20,
    ShiftRight:50,
    ShiftLeft:50,
    
    // Third row
    Digit5:5,
    KeyR     :21,
    KeyD     :37,
    Digit6:6,
    KeyC     :53,
    KeyF     :38,
    KeyT     :22,
    KeyX     :52,
    
    // Fourth row
    Digit7:7,
    KeyY     :23,
    KeyG     :39,
    Digit8:8,
    KeyB     :55,
    KeyH     :40,
    KeyU     :24,
    KeyV     :54,
    
    // Fifth row
    Digit9:9,
    KeyI     :25,
    KeyJ     :41,
    Digit0:10,
    KeyM     :57,
    KeyK     :42,
    KeyO     :26,
    KeyN     :56,
    
    // Sixth row
    Minus:11,  //plus
    KeyP     :27,
    KeyL     :43,
    Equal :12, //minus
    Period:59, 
    Semicolon :44, //colon
    BracketLeft :28, //@
    Comma :58,
    
    // Seventh row
    pound :13,
    BracketRight:29, //asterisk
    Quote:45,  //semicolon
    home  :14,
    rightShift:61,
    Backslash :46, //equal
    upArrow :30,
    Slash :60,

    // Eights row
    Digit1:1,
    Delete :0,   //left arrow
    ControlLeft   :17,
    Digit2:2,
    Space :65,
    commodore :49,  //commodore
    commodore :49,  //commodore
    KeyQ     :18,
    runStop   :33,
    
    // Restore key
    restore   :31

}        






function installKeyboard() {
    keymap= [ 
    [{k:'hide keyboard', c:'hide_keyboard'},{style:'width:120px'},{k:'F1',c:'F1'}, {k:'F2',c:'F2'},{k:'F3',c:'F3'},{k:'F4',c:'F4'},{k:'F5',c:'F5'},{k:'F6',c:'F6'},{k:'F7',c:'F7'},{k:'F8',c:'F8'}],
    [{k:'<-',c:'Delete'}, {k:'1',c:'Digit1'},{k:'2',c:'Digit2'},{k:'3',c:'Digit3'},{k:'4',c:'Digit4'},{k:'5',c:'Digit5'},{k:'6',c:'Digit6'},{k:'7',c:'Digit7'},{k:'8',c:'Digit8'},{k:'9',c:'Digit9'},{k:'0',c:'Digit0'},{k:'+', c:'Minus'},{k:'-', c:'Equal'},{k:'€', c:'pound'},{k:'CLR/Home', c:'home'},{k:'Inst/DEL',c:'Backspace'} ], 
    [{k:'CTRL',c:'ControlLeft'}, {k:'Q'},{k:'W'},{k:'E'},{k:'R'},{k:'T'},{k:'Y'},{k:'U'},{k:'I'},{k:'O'},{k:'P'},{k:'@',c:'BracketLeft'},{k:'*', c:'BracketRight'},{k:'up',c:'upArrow'},{k:'RESTORE', c:'restore'}], 
    [{k:'RunStop',c:'runStop'},{k:'ShftLock', c:'shiftlock'},{k:'A'},{k:'S'},{k:'D'},{k:'F'},{k:'G'},{k:'H'},{k:'J'},{k:'K'},{k:'L'},{k:':', c:'Semicolon'},{k:';', c:'Quote'},{k:'=', c:'Backslash'},{k:'RETURN',c:'Enter'}], 
    [{k:'C=', c:'commodore'},{k:'SHIFT',c:'ShiftLeft'},{k:'Z'},{k:'X'},{k:'C'},{k:'V'},{k:'B'},{k:'N'},{k:'M'},{k:',',c:'Comma'},{k:'.',c:'Period'},{k:'/', c:'Slash'},{k:'SHIFT',c:'rightShift'},{k:'DOWN', c:'ArrowDown'},{k:'RIGHT', c:'ArrowRight'} ],
    [{k:'SPACE', c:'Space', style:'width:450px'}]
    ];

    var the_keyBoard='';
    keymap.forEach(row => {
        the_keyBoard+='<div class="justify-content-center" style="display:flex">';
        row.forEach(keydef => {
            if(keydef.k === undefined)
            {
                var style = "";
                if(keydef.s !== undefined)
                    css = keydef.s; 
                if(keydef.style !== undefined)
                    style = keydef.style; 
                
                the_keyBoard +='<div class="'+css+'" style="'+style+'"></div>';
            }
            else
            {
                if(keydef.c === undefined)
                    keydef.c = 'Key'+keydef.k;
                var css = "btn btn-secondary ml-1 mt-1";
                var style = null; 
                if(keydef.css !== undefined)
                    css = keydef.css; 
                if(keydef.style !== undefined)
                    style = keydef.style; 
                
                the_keyBoard +='<button type="button" id="button_'+keydef.c+'" class="'+css+'"';
                if(style !=null)
                    the_keyBoard += ' style="'+style+'"';
                the_keyBoard += '>'+keydef.k+'</button>'
            }
        });
        the_keyBoard+='</div>';
    });
    $('#divKeyboardRows').html(the_keyBoard);

    keymap.forEach(row => {
        row.forEach(keydef => {
            if(keydef.k === undefined)
                return;
            if(keydef.c === undefined)
              keydef.c = 'Key'+keydef.k;

            $("#button_"+keydef.c).click(function() 
            {
               if(keydef.c == 'hide_keyboard')
               {
                    $('#virtual_keyboard').collapse('hide');
                    setTimeout( scaleVMCanvas, 500);
               }
               else if(keydef.c == 'shiftlock')
               {
                   var c64code = translateKey('ShiftLeft', 'ShiftLeft');
                   if(keydef.locked === undefined || keydef.locked == 0)
                   {
                     wasm_schedule_key(c64code[0], c64code[1], 1,0);                   
                     keydef.locked = 1;
                     $("#button_"+keydef.c).attr("style", "background-color: var(--green) !important");
                   }
                   else
                   {
                     wasm_schedule_key(c64code[0], c64code[1], 0, 0);                   
                     keydef.locked = 0;
                     $("#button_"+keydef.c).attr("style", "");
                   
                   }
               }
               else
               {
                var c64code = translateKey(keydef.c, keydef.k);
                if(c64code !== undefined){
                    wasm_schedule_key(c64code[0], c64code[1], 1,0);

                    if(keydef.c == 'ShiftLeft' ||keydef.c == 'rightShift')
                    {
                        $("#button_"+keydef.c).attr("style", "background-color: var(--green) !important");
                    
                        setTimeout(() => {
                            wasm_schedule_key(c64code[0], c64code[1], 0,1);
                            $("#button_"+keydef.c).attr("style", "");
                        }, 1000*4);
                    }
                    else if(keydef.c == 'commodore')
                    {
                        $("#button_"+keydef.c).attr("style", "background-color: var(--blue) !important");
                    
                        setTimeout(() => {
                            wasm_schedule_key(c64code[0], c64code[1], 0,1);
                            $("#button_"+keydef.c).attr("style", "");
                        }, 1000*4);
                    
                    }
                    else if(keydef.c == 'ControlLeft')
                    {
                        $("#button_"+keydef.c).attr("style", "background-color: var(--blue) !important");
                    
                        setTimeout(() => {
                            wasm_schedule_key(c64code[0], c64code[1], 0,1);
                            $("#button_"+keydef.c).attr("style", "");
                        }, 1000*4);
                    
                    }
                    else if(keydef.c == 'runStop')
                    {
                        $("#button_"+keydef.c).attr("style", "background-color: var(--red) !important");
                    
                        setTimeout(() => {
                            wasm_schedule_key(c64code[0], c64code[1], 0, 1);
                            $("#button_"+keydef.c).attr("style", "");
                        }, 1000*4);
                    
                    }
                    else
                    {  //release the key automatically after a short time ...
                        //setTimeout(() => {
                        wasm_schedule_key(c64code[0], c64code[1], 0, 1);
                        //}, 100);
                    }
                }
               }
            });
        });
    });


}


