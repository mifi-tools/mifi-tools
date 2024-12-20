define(function () {
    var a = {
        WEBUI_TITLE: "4G Mobile Hotspot",
        PRODUCT_TYPE: "UFI",
        TURN_OFF_SUPPORT: true,
        WIFI_SLEEP_SUPPORT: true,
        HAS_BATTERY: false,
        FAST_BOOT_SUPPORT: false,
        HAS_BLACK_AND_WHITE_FILTER: true,
        MAX_STATION_NUMBER: 8,
        STATION_BLOCK_SUPPORT: true,
        WIFI_BANDWIDTH_SUPPORT_40MHZ: true,
        WIFI_BANDWIDTH_SUPPORT: true,
        WIFI_BAND_SUPPORT: true,
        WIFI_SUPPORT_QR_CODE: false,
        SD_CARD_SUPPORT: false,
        UPGRADE_TYPE: "NONE",
        HAS_FOTA: false,
        HAS_UPDATE_CHECK: true,
        HAS_UPNP: true,
        DDNS_SUPPORT: false,
        NETWORK_UNLOCK_SUPPORT: true,
        NETWORK_MODES: [{name: "802.11 b/g/n/ax", value: "6"}],
        HAS_PHONEBOOK: false,
        AUTH_MODES_ALL: [{name: "NO ENCRYPTION", value: "OPEN"}, {
            name: "WPA2-PSK",
            value: "WPA2PSK"
        }, {name: "WPA-PSK/WPA2-PSK", value: "WPAPSKWPA2PSK"}, {
            name: "WPA3-Personal",
            value: "WPA3Personal"
        }, {name: "WPA2(AES)/WPA3-Personal", value: "WPA2WPA3"}],
        AUTO_MODES: [{name: "Automatic", value: "NETWORK_auto"}, {name: "4G Only", value: "Only_LTE"}, {
            name: "3G Only",
            value: "Only_WCDMA"
        }]
    };
    return a
});