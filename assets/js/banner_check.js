/*

var isRunning = 1;
var check_banner = setInterval(function()
{
    try
    {
        var socialBanners = document.getElementsByClassName("disclaimer");
        if (socialBanners != null)
        {
            for (var bannerNo = 0; bannerNo < socialBanners.length; bannerNo++)
            {
                socialBanners[bannerNo].remove();
            }
            isRunning = 0;
            stopInterval(check_banner);
        }
    }
    catch (e)
    {}
    body_div_elements = document.getElementsByTagName("div");
    for (element_number = 0; element_number < body_div_elements.length; element_number++)
    {
        try
        {
            if (body_div_elements[element_number].children[0].children[0].src == "https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png")
            {
                body_div_elements[element_number].remove();
                isRunning = 0;
                stopInterval(check_banner);
                break;
            }
        }
        catch (e)
        {}
    }
}, 10);

*/