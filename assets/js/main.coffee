# Add scripts to load to this array. These can be loaded remotely like jquery
# is below, or can use file paths, like 'vendor/underscore'
js = ["http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"]

# this will fire once the required scripts have been loaded
require js, ->
  $ ->
    setTimeout (-> $('.icon').css opacity: 1), 500

    # smooth scroll to anchor

    filterPath = (string) ->
      return string.replace(/^\//,'').replace(/(index|default).[a-zA-Z]{3,4}$/,'').replace(/\/$/,'')
   
    $('a[href*=#]').each ->
      thisPath = filterPath(this.pathname) || locationPath
      if locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/,'')
        $target = $(this.hash)
        target = this.hash
        if target
          targetOffset = $target.offset().top
          $(this).on 'click', (e) ->
            e.preventDefault()
            $(scrollElem).animate { scrollTop: targetOffset }, 400, -> location.hash = target
   
    scrollableElement = (els) ->
      for arg in arguments
        $scrollElement = $(arg)
        if $scrollElement.scrollTop() > 0
          return arg
        else
          $scrollElement.scrollTop(1)
          isScrollable = $scrollElement.scrollTop() > 0
          $scrollElement.scrollTop(0)
          if isScrollable
            return arg
      return []

    locationPath = filterPath(location.pathname)
    scrollElem = scrollableElement('html', 'body')