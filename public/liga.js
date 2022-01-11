/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'Folder Warning': '&#xeab0;',
            'Folder Video': '&#xeaaf;',
            'Folder Upload': '&#xeaae;',
            'Folder Text': '&#xeaad;',
            'Folder Sync': '&#xeaac;',
            'Folder Star': '&#xeaab;',
            'Folder Share': '&#xeaaa;',
            'Folder Search': '&#xeaa9;',
            'Folder Open': '&#xeaa8;',
            'Folder New': '&#xeaa7;',
            'Folder Locked': '&#xeaa6;',
            'Folder Linked': '&#xeaa5;',
            'Folder Info': '&#xeaa4;',
            'Folder Import': '&#xeaa3;',
            'Folder Image': '&#xeaa2;',
            'Folder File': '&#xeaa1;',
            'Folder Export': '&#xeaa0;',
            'Folder Exchange': '&#xea9f;',
            'Folder Download': '&#xea9e;',
            'Folder Delete': '&#xea9d;',
            'Folder Copy': '&#xea9c;',
            'Folder Code': '&#xea9b;',
            'Folder Check': '&#xea9a;',
            'Folder Bookmark': '&#xea99;',
            'Folder Backup': '&#xea98;',
            'Folder Audio': '&#xea97;',
            'Folder Archive': '&#xea96;',
            'Folder': '&#xea95;',
            'Add Tab': '&#xe949;',
            'Airplane Mode': '&#xe94a;',
            'Airplane Mode Off': '&#xe94b;',
            'Align Bottom': '&#xe94f;',
            'Align Left': '&#xe94c;',
            'Align Right': '&#xe94d;',
            'Align Top': '&#xe94e;',
            'Amazon': '&#xe90b;',
            'Android': '&#xe90a;',
            'Answer': '&#xea11;',
            'Apple': '&#xe91a;',
            'Atom': '&#xe91c;',
            'Auction': '&#xe9b9;',
            'Back': '&#xe9e2;',
            'Back 2': '&#xe9e3;',
            'Back 3': '&#xe9e4;',
            'Back 4': '&#xe9e5;',
            'Back 4 Circle': '&#xe9e6;',
            'Back 5': '&#xe9e8;',
            'Back 6': '&#xe9e9;',
            'Back 7': '&#xe9ea;',
            'Back Square 4': '&#xe9e7;',
            'Backward': '&#xe950;',
            'Backward 2': '&#xe9eb;',
            'Bag Remove': '&#xe9ba;',
            'Barcode Scan': '&#xe9bb;',
            'Basket': '&#xe9bc;',
            'Basket Add': '&#xe9bd;',
            'Basket Checked': '&#xe9be;',
            'Basket Close': '&#xe9bf;',
            'Basket Out': '&#xe9c0;',
            'Basket Remove': '&#xe9c2;',
            'Behance': '&#xe91e;',
            'Bitcoin': '&#xe92b;',
            'Block Circle': '&#xe93c;',
            'Bootstrap': '&#xe91f;',
            'Brightness High': '&#xe951;',
            'Brightness Low': '&#xe952;',
            'Call': '&#xea12;',
            'Call Back': '&#xea13;',
            'Call Block': '&#xea14;',
            'Call End': '&#xea15;',
            'Call Hold': '&#xea16;',
            'Call In': '&#xea17;',
            'Call Logs': '&#xea18;',
            'Call Off': '&#xea19;',
            'Call Out': '&#xea1a;',
            'Cart': '&#xe9c3;',
            'Cart Add': '&#xe9c4;',
            'Cart Cancel': '&#xe9c5;',
            'Cart Checked': '&#xe9c6;',
            'Cart In': '&#xe9c7;',
            'Cart Loaded': '&#xe9c8;',
            'Cart Out': '&#xe9c9;',
            'Cart Remove': '&#xe9ca;',
            'Chat': '&#xea1b;',
            'Chat 2': '&#xea1c;',
            'Chat 3': '&#xea1d;',
            'Check': '&#xe935;',
            'Check All': '&#xe936;',
            'Double Check': '&#xe936;',
            'Check Circle': '&#xe93b;',
            'Check Circle Alt': '&#xe947;',
            'Check Square': '&#xe943;',
            'Check Square Alt': '&#xe948;',
            'Circle Down': '&#xe9ec;',
            'Circle Down 2': '&#xe9ed;',
            'Circle Down 3': '&#xe9ee;',
            'Circle Left': '&#xe9ef;',
            'Circle Left 2': '&#xe9f0;',
            'circle left 3': '&#xe9f1;',
            'Circle Right': '&#xe9f2;',
            'Circle Right 2': '&#xe9f3;',
            'Circle Right 3': '&#xe9f4;',
            'Circle Up': '&#xe9f5;',
            'Circle Up 2': '&#xe9f6;',
            'Circle Up 3': '&#xe9f7;',
            'Close': '&#xe937;',
            'Close Circle': '&#xe938;',
            'Cancel Circle': '&#xe938;',
            'Close Square': '&#xe944;',
            'Close Square Full': '&#xe945;',
            'Comment': '&#xea1e;',
            'Comment 2': '&#xea1f;',
            'Comment 2 Hashtag': '&#xea20;',
            'Comment 2 Quote': '&#xea21;',
            'Comment 2 Smile': '&#xea22;',
            'Comment 2 Write': '&#xea23;',
            'Comment 3': '&#xea24;',
            'Comment 3 Write': '&#xea25;',
            'Comment Like': '&#xea26;',
            'Comments': '&#xea27;',
            'Comments 2': '&#xea28;',
            'Comments 3': '&#xea29;',
            'Config': '&#xe953;',
            'Config Alt': '&#xe954;',
            'Dash': '&#xe92d;',
            'Delivery': '&#xe9cb;',
            'Delivery 2': '&#xe9cc;',
            'Delivery Box': '&#xe9cd;',
            'Delivery Box 2': '&#xe9ce;',
            'Discount Circle': '&#xe9cf;',
            'Discount Star': '&#xe9d0;',
            'Door Lock': '&#xe955;',
            'Double Arrows Left': '&#xe9f8;',
            'Double Arrows Right': '&#xe9f9;',
            'Down 2': '&#xe9fb;',
            'Down 3': '&#xe9fc;',
            'Download': '&#xe956;',
            'Download Alt': '&#xe957;',
            'Dribbble': '&#xe900;',
            'Dropbox': '&#xe901;',
            'Ebay': '&#xe90f;',
            'Edit Circle': '&#xe959;',
            'Edit Square': '&#xe958;',
            'Email': '&#xea2a;',
            'Email 2 At': '&#xea2b;',
            'Email 2 Letter': '&#xea2c;',
            'Email Open': '&#xea2d;',
            'Email 2 Search': '&#xea2e;',
            'Email at': '&#xea2f;',
            'Email Ban': '&#xea30;',
            'Email Check': '&#xea31;',
            'Email Close': '&#xea32;',
            'Email Delete': '&#xea33;',
            'Email Edit': '&#xea34;',
            'Email Foward': '&#xea35;',
            'Email In': '&#xea36;',
            'Email Letter': '&#xea37;',
            'Email Locked': '&#xea38;',
            'Email New': '&#xea39;',
            'Email Opem': '&#xea3a;',
            'Email Out': '&#xea3b;',
            'Email Refresh': '&#xea3c;',
            'Email Reply': '&#xea3d;',
            'Email Search': '&#xea3e;',
            'Email Send': '&#xea3f;',
            'Email Star': '&#xea40;',
            'Ethereum': '&#xe92c;',
            'Expand': '&#xe95a;',
            'Expand 2': '&#xe95b;',
            'Expand 3': '&#xe95c;',
            'Expand 4': '&#xe95d;',
            'Expand Horizontal': '&#xe95e;',
            'Expand Vertical': '&#xe95f;',
            'Eye': '&#xe960;',
            'Eye Off': '&#xe961;',
            'Facebook': '&#xe902;',
            'File': '&#xea71;',
            'File Archive': '&#xea72;',
            'File Audio': '&#xea73;',
            'File Backup': '&#xea74;',
            'File Bookmark': '&#xea75;',
            'File Clip': '&#xea76;',
            'File Code': '&#xea77;',
            'File Copy': '&#xea78;',
            'File Corrupted': '&#xea79;',
            'File Delete': '&#xea7a;',
            'File Download': '&#xea7b;',
            'File Edit': '&#xea7c;',
            'File Error': '&#xea7d;',
            'File Exchange': '&#xea7e;',
            'File Export': '&#xea7f;',
            'File Image': '&#xea80;',
            'File Import': '&#xea81;',
            'File Info': '&#xea82;',
            'File Linked': '&#xea83;',
            'File Load': '&#xea84;',
            'File Locked': '&#xea85;',
            'File New': '&#xea86;',
            'File Remove': '&#xea87;',
            'File Search': '&#xea8a;',
            'File Settings': '&#xea8b;',
            'File Share': '&#xea8c;',
            'File Star': '&#xea8d;',
            'File Sync': '&#xea8e;',
            'File Table': '&#xea8f;',
            'File Text': '&#xea90;',
            'File Upload': '&#xea91;',
            'File Vector': '&#xea92;',
            'File Video': '&#xea93;',
            'File Warning': '&#xea94;',
            'Files': '&#xea88;',
            'Files 2': '&#xea89;',
            'Flash': '&#xe962;',
            'Flash 2': '&#xe963;',
            'Flash 3': '&#xe964;',
            'Flip Horizontal': '&#xe965;',
            'Flip Vertical': '&#xe966;',
            'Fork Arrows': '&#xe9fd;',
            'Forward': '&#xe967;',
            'Forward 2': '&#xe9fe;',
            'Git': '&#xe90e;',
            'Github': '&#xe90c;',
            'Google': '&#xe913;',
            'Google Play': '&#xe923;',
            'Grid Circles': '&#xe968;',
            'Grid Squares': '&#xe969;',
            'Grid Squares 2': '&#xe96a;',
            'Hamburger Menu': '&#xe96b;',
            'Hamburger Menu Compact': '&#xe96c;',
            'Handbag': '&#xe9d1;',
            'Help': '&#xe96d;',
            'Help 2': '&#xe96e;',
            'Home': '&#xe96f;',
            'Inbox': '&#xea41;',
            'Inbox Empty': '&#xea42;',
            'Inbox Full': '&#xea43;',
            'Info Circle': '&#xe93f;',
            'Inside': '&#xe970;',
            'Instagram': '&#xe903;',
            'Key': '&#xe971;',
            'Key 2': '&#xe972;',
            'Kickstarter': '&#xe917;',
            'Label': '&#xe973;',
            'Label Cancel': '&#xe974;',
            'Layout': '&#xe975;',
            'Layout 2': '&#xe976;',
            'Layout 3': '&#xe977;',
            'Left': '&#xe9ff;',
            'Left 2': '&#xea00;',
            'Letter': '&#xea44;',
            'Letters': '&#xea45;',
            'LinkedIn': '&#xe924;',
            'List': '&#xe978;',
            'List 2': '&#xe979;',
            'List 3': '&#xe97a;',
            'List 4': '&#xe97b;',
            'List Heart': '&#xe9d2;',
            'Litecoin': '&#xe92e;',
            'Lock': '&#xe97c;',
            'Loop': '&#xe97e;',
            'Magic Wand': '&#xe97f;',
            'Magic Wand 2': '&#xe980;',
            'Magnetic': '&#xe981;',
            'Magnifier': '&#xe982;',
            'Magnifier 2': '&#xe983;',
            'MailChimp': '&#xe927;',
            'Maximize Left': '&#xe984;',
            'Maximize Right': '&#xe985;',
            'Medium': '&#xe904;',
            'Megaphone': '&#xea46;',
            'Megaphone 2': '&#xea47;',
            'Menu Circle Grid': '&#xe986;',
            'Message': '&#xea48;',
            'Message 2': '&#xea49;',
            'Message 2 Alert': '&#xea4a;',
            'Message 2 Task': '&#xea4b;',
            'Message 2 Heart': '&#xea4c;',
            'Message 2 Like': '&#xea4d;',
            'Message 2 Pause': '&#xea4f;',
            'Message 2 Tone': '&#xea4e;',
            'Message 2 Write': '&#xea50;',
            'Message 3': '&#xea51;',
            'Message 3 Alert': '&#xea52;',
            'Message 3 Ask': '&#xea53;',
            'Message 3 Hashtag': '&#xea54;',
            'Message 3 Heart': '&#xea55;',
            'Message 3 Like': '&#xea56;',
            'Message 3 Music Tone': '&#xea57;',
            'Message 3 Pause': '&#xea58;',
            'Message 3 Quote': '&#xea59;',
            'Message 3 Smile': '&#xea5a;',
            'Message 3 Write': '&#xea5b;',
            'Message Alert': '&#xea5c;',
            'Message Ask': '&#xea5d;',
            'Message Hashtag': '&#xea5e;',
            'Message Heart': '&#xea5f;',
            'Message Music Tone': '&#xea60;',
            'Message Pause': '&#xea61;',
            'Message Quote': '&#xea62;',
            'Message Smile': '&#xea63;',
            'Message Write': '&#xea64;',
            'Microsoft': '&#xe91b;',
            'Minus Circle': '&#xe93a;',
            'Minus Square': '&#xe942;',
            'Monero': '&#xe931;',
            'More Circle': '&#xe987;',
            'More Circle Horizontal': '&#xe988;',
            'More Circle Horizontal Filled': '&#xe98e;',
            'More Circle Vertical': '&#xe989;',
            'More Circle Vertical Filled': '&#xe98d;',
            'More Square Horizontal': '&#xe98b;',
            'More Square Horizontal Filled': '&#xe98f;',
            'More Square Vertical': '&#xe98a;',
            'More Square Vertical Filled': '&#xe98c;',
            'NEM': '&#xe930;',
            'Next': '&#xea02;',
            'Next 2': '&#xea03;',
            'Next 3': '&#xea04;',
            'Next 4': '&#xea05;',
            'Next 5': '&#xea06;',
            'Next 6': '&#xea07;',
            'Next 7': '&#xea08;',
            'Notification': '&#xe990;',
            'Notification Add': '&#xe991;',
            'Notification Off': '&#xe992;',
            'Notification Paused': '&#xe993;',
            'Open Sign': '&#xe9d3;',
            'Outbox': '&#xea65;',
            'Outside': '&#xe994;',
            'Paper Clip': '&#xe995;',
            'Paper Plane': '&#xe996;',
            'Paper Plane 2': '&#xea66;',
            'Pass': '&#xe997;',
            'Paypal': '&#xe905;',
            'Phone Call In': '&#xea67;',
            'Phone Call Out': '&#xea68;',
            'Phone Contacts': '&#xea69;',
            'Phone Message': '&#xea6a;',
            'Phone Message 2': '&#xea6b;',
            'Phone Message 3': '&#xea6c;',
            'Phone Ring': '&#xea6d;',
            'Phone Vibration': '&#xe998;',
            'Pin': '&#xe999;',
            'Pin 2': '&#xe99a;',
            'Pin 3': '&#xe99b;',
            'Pinterest': '&#xe90d;',
            'PlayStation': '&#xe921;',
            'Plus': '&#xe934;',
            'More': '&#xe934;',
            'Plus Circle': '&#xe939;',
            'Plus Square': '&#xe941;',
            'Power': '&#xe946;',
            'Price Tag': '&#xe9d4;',
            'Q And A': '&#xea6e;',
            'QR Code': '&#xe9da;',
            'Question Circle': '&#xe940;',
            'React': '&#xe929;',
            'Redddit': '&#xe910;',
            'Refresh': '&#xe99c;',
            'Refresh 2': '&#xe99d;',
            'Refresh Warning': '&#xe99e;',
            'Reload': '&#xe99f;',
            'Reload Checked': '&#xe9a0;',
            'Remove Tab': '&#xe9a1;',
            'Right': '&#xea09;',
            'Right 2': '&#xea0a;',
            'Right 3': '&#xea0b;',
            'Ripple': '&#xe92f;',
            'S Arrow': '&#xea0c;',
            'S Arrow 2': '&#xea0d;',
            'Scroll': '&#xe9a2;',
            'Search History': '&#xe9a3;',
            'Settings': '&#xe9a4;',
            'Share': '&#xe9a5;',
            'Share 2': '&#xe9a6;',
            'Share 3': '&#xe9a7;',
            'Share 4': '&#xe9a8;',
            'Shopping Tag': '&#xe9d5;',
            'Shopping Tags': '&#xe9d6;',
            'Skype': '&#xe925;',
            'Slack': '&#xe918;',
            'Snapchat': '&#xe911;',
            'Spotify': '&#xe916;',
            'Steam': '&#xe91d;',
            'Stripe': '&#xe922;',
            'Swap Horizontal': '&#xe9a9;',
            'Swap Vertical': '&#xe9aa;',
            'Switch Off': '&#xe9ad;',
            'Switch On': '&#xe9ae;',
            'Switches': '&#xe9ab;',
            'Switches 2': '&#xe9ac;',
            'Tabs': '&#xe9af;',
            'Tabs 2': '&#xe9b0;',
            'Telephone': '&#xea6f;',
            'Tesla': '&#xe933;',
            'Tether': '&#xe932;',
            'Ticket': '&#xe9d7;',
            'Trash': '&#xe9b1;',
            'Trash Recycle': '&#xe9b2;',
            'TripAdvisor': '&#xe912;',
            'Twitch': '&#xe920;',
            'Twitter': '&#xe906;',
            'Unlock': '&#xe97d;',
            'Up': '&#xea0e;',
            'Up 2': '&#xea0f;',
            'Up 3': '&#xea10;',
            'Upload': '&#xe9b3;',
            'Upload 2': '&#xe9b4;',
            'Vimeo': '&#xe926;',
            'Visualmodo': '&#xe907;',
            'Voicemail': '&#xea70;',
            'Wallet': '&#xe9d8;',
            'Wallet 2': '&#xe9d9;',
            'Wallet Add': '&#xe9db;',
            'Warning Circle': '&#xe93d;',
            'Warning Triangle': '&#xe93e;',
            'WhatsApp': '&#xe915;',
            'Wikipedia': '&#xe919;',
            'WordPress': '&#xe908;',
            'Xbox': '&#xe92a;',
            'Youtube': '&#xe909;',
            'Zendesk': '&#xe928;',
            'Zoom In': '&#xe9b5;',
            'Zoom In 2': '&#xe9b6;',
            'Zoom Out': '&#xe9b7;',
            'Zoom out 2': '&#xe9b8;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icomoon-liga/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());