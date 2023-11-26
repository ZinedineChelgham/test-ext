// Content script injected into the chatbox webpage
const firstAnswerId = 3;

let currentAnswerId = firstAnswerId;

// Function to track chat messages
function trackChatMessages() {
    console.log("yes it work on gpt");
    const previousMessages = []

    // Function to check for new messages
    function checkForNewMessages() {
        const answerContainer = document
            .querySelector(`[data-testid=conversation-turn-${currentAnswerId}]`)

        let answer;
        if (answerContainer) {
            answer = answerContainer
                .lastChild.firstChild.lastChild.children[1].children[0].children[0].innerText
        }

        if (answer) {
            previousMessages.push(answer);
            currentAnswerId += 1;
        } else {
            console.log("no message");
        }

        console.log("Last answer: ", previousMessages);
    }

    // Check for new messages periodically (every 2 seconds in this example)
    setInterval(checkForNewMessages, 2000);
}

// Call the function when the content script loads
trackChatMessages();
