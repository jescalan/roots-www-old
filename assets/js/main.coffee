# Add scripts to load to this array. These can be loaded remotely like jquery
# is below, or can use file paths, like 'vendor/underscore'
requirejs.config
  shim: 
    waypoints:
      deps: ['jquery']
  paths:
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min'
    waypoints: '/js/waypoints.min'

# this will fire once the required scripts have been loaded
require ['jquery', 'waypoints'], ($) ->
  $ ->
    setTimeout (-> $('.icon').css opacity: 1), 500

    # stick the navigation when it needs to be stuck --------------

    if $(window).scrollTop() > 392
      $('#docnav').css top: 5

    $(window).on 'scroll', ->
      if $(window).scrollTop() > 330
        $('#docnav').css top: 5
      else
        $('#docnav').css top: 330 - $(window).scrollTop()

    # waypoints ---------------------------------------------------

    $('.docs h3').waypoint ->
      $('#docnav li').removeClass 'active'
      $("a[href='##{$(@).attr('id')}']").parent().addClass 'active'

    # smooth scrolling --------------------------------------------

    $('a[href*=#]:not([href=#])').on 'click', ->
      if location.pathname.replace(/^\//,'') == @.pathname.replace(/^\//,'') || location.hostname == @.hostname
        target = if $(@.hash).length then $(@.hash) else $("[name=#{this.hash.slice(1)}]")
        if target.length
          # this needs to be 1 if scrolling down, -1 if scrolling up. ugh.
          factor = if target.offset().top > $(window).scrollTop() then -1 else 1
          $('html,body').animate({ scrollTop: target.offset().top - factor }, 500)
          return false
    
    # auto target blank external links

    $('a[href^="http://"]').attr 'target', '_blank'