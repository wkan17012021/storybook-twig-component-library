/**
 * Copied and modified from better_social_sharing_buttons/js/copy-current-url.js.
 */
(function ($, Drupal) {
  "use strict";

  /* Main function, listens for a click event,
  calls all the other functions upon element click */
  Drupal.behaviors.myThemeSocialShareCopyUrl = {
    attach: function (context) {
      $(once("myThemeSocialShareCopyUrl", ".social-link--copy", context)).on(
        "click",
        function (e) {
          e.preventDefault();
          // Checks if page is using HTTPS
          if (window.isSecureContext) {
            // Calls the secureCopyToClipboard function
            Drupal.secureCopyToClipboard(window.location.href);
          } else {
            // If site is not using HTTPS, use the fallback function
            Drupal.unsecureCopyToClipboard(window.location.href);
          }
          // Calls the function that pops up the message
          Drupal.showPopUpMessage(e.currentTarget);
        }
      );
    },
  };

  // For HTTPS sites this is the function to copy current url to clipboard
  Drupal.secureCopyToClipboard = function (valueToBeCopiedToClipboard) {
    // Here we use the clipboardAPI to copy to clipboard
    navigator.clipboard.writeText(valueToBeCopiedToClipboard).catch((err) => {
      console.error("Error copying current URL to clipboard: ", err);
    });
  };

  // For non-HTTPS sites this will be the fallback function
  Drupal.unsecureCopyToClipboard = function (valueToBeCopiedToClipboard) {
    const inputElem = document.createElement("input");
    inputElem.value = valueToBeCopiedToClipboard;
    // Append the element to the body
    document.body.append(inputElem);
    // Select the element
    inputElem.select();
    try {
      /* This section copies the current selection to clipboard using 'execCommand',
      which is in the process of being deprecated, however its 'copy' command is still
      fully supported by major browsers. To learn more, please follow the link below:
      https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand */
      document.execCommand("copy");
    } catch (err) {
      // If unable to copy to clipboard, raise an error
      console.error("Unable to copy to clipboard", err);
    }
    // Remove the appended input element
    document.body.removeChild(inputElem);
  };

  Drupal.showPopUpMessage = function (clickedButton) {
    // Find the parent container
    let parentContainer = clickedButton.closest(".social-share");
    if (parentContainer) {
      let elemPopUpShow = parentContainer.querySelector(".social-share__popup");
      if (elemPopUpShow) {
        elemPopUpShow.classList.remove("u-hidden");
        // Remove 'visible' from class after a certain time
        setTimeout(() => {
          elemPopUpShow.classList.add("u-hidden");
        }, 4000);
      }
    }
  };
})(jQuery, Drupal, once);
