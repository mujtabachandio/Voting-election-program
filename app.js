"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Define a class to represent a candidate
var Candidate = /** @class */ (function () {
    function Candidate(name) {
        this.name = name;
        this.votes = 0;
    }
    return Candidate;
}());
// Define a class for the voting program
var VotingProgram = /** @class */ (function () {
    function VotingProgram() {
        this.candidates = [
            new Candidate("PTI"),
            new Candidate("PPP"),
            new Candidate("PMLN")
        ];
        this.totalVotes = 0;
    }
    VotingProgram.prototype.vote = function () {
        if (this.totalVotes < 10) {
            console.log("Candidates:");
            this.candidates.forEach(function (candidate, index) {
                console.log("".concat(index + 1, ". ").concat(candidate.name));
            });
            var selectedCandidateIndex = readlineSync.questionInt("Enter the number of the candidate you want to vote for: ") - 1;
            if (selectedCandidateIndex >= 0 && selectedCandidateIndex < this.candidates.length) {
                this.candidates[selectedCandidateIndex].votes++;
                this.totalVotes++;
            }
            else {
                console.log("Invalid candidate number.");
            }
        }
        else {
            console.log("Voting limit reached. No more votes allowed.");
        }
    };
    VotingProgram.prototype.displayResults = function () {
        console.log("Election Results:");
        this.candidates.forEach(function (candidate) {
            console.log("".concat(candidate.name, ": ").concat(candidate.votes, " votes"));
        });
    };
    return VotingProgram;
}());
// Main function
function main() {
    var votingProgram = new VotingProgram();
    while (votingProgram.totalVotes < 10) {
        votingProgram.vote();
    }
    // Display results
    votingProgram.displayResults();
}
// Run the program
main();
