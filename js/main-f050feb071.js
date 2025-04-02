var searchParams = new URLSearchParams(window.location.search),
    channel = searchParams.get("p0") || "organic",
    adjustId = searchParams.get("p1") || "1kqiybi0",
    campaignid = searchParams.get("p2") || "",
    adsetid = searchParams.get("p3") || "",
    adid = searchParams.get("p4") || "",
    source = searchParams.get("p5") || "",
    medium = searchParams.get("p6") || "",
    fbclid = searchParams.get("fbclid") || "",
    invite = searchParams.get("invite") || "",
    game = searchParams.get("game") || "",
    fbpid = getFbPid(),
    adjustEvent = !1,
    fbAccessToken = "",
    fbPixelId = "",
    downloadUrl = "";

function getFbPid() {
    var a = document.cookie.match(/(^|;) ?_fbp=([^;]*)(;|$)/);
    return a ? a[2] : ""
}
var fbclid = fbclid.replace(/_/g, "$"),
    isUpdate = !1;

function queryConfig() {
    ajax({
        url: "/api/app/version/apk/latest",
        method: "GET"
    }).then(a => {
        0 === a.code && a.data && (downloadUrl = a.data.apkPackageUrl)
    }), channel && ajax({
        url: "/api/app/ascribe/channelAdjustInfo",
        method: "GET",
        data: {
            channel: channel
        }
    }).then(a => {
        0 === a.code && a.data && (adjustEvent = a.data.adjustEvent, fbAccessToken = a.data.fbAccessToken, fbPixelId = a.data.fbPixelId)
    })
}
async function handleButtonClick() {
    if (downloadUrl || await ajax({
            url: "/api/app/version/apk/latest",
            method: "GET"
        }).then(a => {
            0 === a.code && a.data && (downloadUrl = a.data.apkPackageUrl)
        }), isUpdate) return window.open(downloadUrl);
    var e = `channel_${channel}_source_${source}_medium_${medium}_fbclid_${fbclid}_fbpid_${fbpid}_invite_${invite}_game_` + game,
        d = `jeetup://?channel=${channel}&source=${source}&medium=${medium}&fbclid=${fbclid}&fbpid=${fbpid}&invite=${invite}&game=` + game;
    ascribeClick(), setTimeout(() => {
        var a = adjustEvent ? `https://app.adjust.world/${adjustId}?campaign=${campaignid}&adgroup=${adsetid}&creative=${adid}&fbclid=${fbclid}&fb_pixel_id=${fbPixelId}&fb_access_token=${fbAccessToken}&label=${e}&deep_link=${encodeURIComponent(d)}&redirect=` + encodeURIComponent(downloadUrl) : `https://app.adjust.world/${adjustId}?campaign=${campaignid}&adgroup=${adsetid}&creative=${adid}&fbclid=${fbclid}&label=${e}&deep_link=${encodeURIComponent(d)}&redirect=` + encodeURIComponent(downloadUrl);
        adjustId && 0 < adjustId.length && window.open(a)
    }, 300)
}

function ascribeData() {
    ajax({
        url: "/api/app/ascribe/landing-page/view",
        method: "POST",
        data: {
            fbClickId: fbclid ? ? "",
            campaignId: campaignid ? ? "",
            adGroup: adsetid ? ? "",
            adId: adid ? ? "",
            channel: channel ? ? "organic"
        }
    })
} - 1 < window.location.href.indexOf("?latest") ? isUpdate = !0 : ascribeData(), queryConfig();
let ascribeClick = async () => {
    await ajax({
        url: "/api/app/ascribe/inject",
        method: "POST",
        data: {
            fbClickId: fbclid ? ? "",
            campaignId: campaignid ? ? "",
            adGroup: adsetid ? ? "",
            adId: adid ? ? "",
            channel: channel ? ? "organic"
        }
    })
};