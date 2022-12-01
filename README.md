Plan
  Components needed
    Home Page
      Image [randomly select image from theme list]
      Accordian
        Accordian peice
      Search Bar
        [Make the icon clickable to switch search]
      Settings Button
    Settings Page
      Link edit page
        [Add/Remove Accordians]
        [Add/remove links]
      Theme Edit Page
        [Add/remove themes]
        [Edit colors]
        [Edit text size]
        [Edit Fonts]
        [Edit image[s] for theme]
      Search Bar Edit Page
        [Let users add/remove search engines]
        [Let users add/remove keywords > website]
      Backup Page
        [Backup/restore]
  Interfaces needed
    https://expertcodeblog.wordpress.com/2018/03/12/typescript-object-array-declaration/
    URL
      Custom Type URL [Text string, Link string]
    Acordian
      Position - number
      Text - string
      URLs - URL[]
    Themes
      Name - string
      Images - string[]
      BG Color - number
      Text Color - number
      Accordian Color - Number
      Accent Color - Number
      Font Size - Number
      Font - string
    SearchEngine
      Custome Type [name string, logo string, searchurl string]
    Hotwords
      Custom Type [hotword string, URL string]
    Search Bar
      SearchEngine - searchEngine[]
      current index - number
      hotwords - hotword[]
  Services Needed
    GetUserData - Get info from cookies
    SaveUserData - Save info to cookies
  Routing Module
