const jobs = {
    beggar: {
        name: "物乞い",
        reward: 1,
        duration: 100
    }
};

function setJob(jobId) {
    game.currentJob = jobId;
    game.progress = 0;
}
