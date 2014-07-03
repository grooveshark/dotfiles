/**
 * Bugzilla MERGED
 * One-click to mark bug status as merged, remove "PULL REQUEST" from title, adds "merged" comment, puts focus on
 * assignee so you can easily reassign to the person who made the pull request.
 */
javascript:(function() {var script = document.createElement('script');script.onload = function() { window.$('#bug_status').val('RESOLVED');showHideStatusItems('', []);window.$('#resolution').val('MERGED');window.$('#comment').val('merged'); window.$('#summary_alias_input').removeClass('bz_default_hidden'); window.$('#summary_alias_container').addClass('bz_default_hidden'); replacementText = window.$('#short_desc').val().replace(/^PULL REQUEST: /, '');window.$('#short_desc').val(replacementText);window.$('#bz_assignee_input').removeClass('bz_default_hidden'); window.$('#bz_assignee_edit_container').addClass('bz_default_hidden'); window.$('#assigned_to').focus();};script.src = 'https://code.jquery.com/jquery-1.11.0.min.js';script.type = 'text/javascript';document.getElementsByTagName('head')[0].appendChild(script);})();

/**
 * Github EXPLODE
 * Expands all comments on the discussion tab. Useful if you're having a hard time finding a comment that needs a reply.
 */
javascript:$('.discussion-item-toggle-closed').click()