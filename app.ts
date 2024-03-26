import * as readlineSync from 'readline-sync';

// Define a class to represent a candidate
class Candidate {
    public name: string;
    public votes: number;

    constructor(name: string) {
        this.name = name;
        this.votes = 0;
    }
}

// Define a class for the voting program
class VotingProgram {
    public candidates: Candidate[];
    public totalVotes: number;

    constructor() {
        this.candidates = [
            new Candidate("PTI"),
            new Candidate("PPP"),
            new Candidate("PMLN")
        ];
        this.totalVotes = 0;
    }

    public vote() {
        if (this.totalVotes < 10) {
            console.log("Candidates:");
            this.candidates.forEach((candidate, index) => {
                console.log(`${index + 1}. ${candidate.name}`);
            });

            const selectedCandidateIndex = readlineSync.questionInt("Enter the number of the candidate you want to vote for: ") - 1;

            if (selectedCandidateIndex >= 0 && selectedCandidateIndex < this.candidates.length) {
                this.candidates[selectedCandidateIndex].votes++;
                this.totalVotes++;
            } else {
                console.log("Invalid candidate number.");
            }
        } else {
            console.log("Voting limit reached. No more votes allowed.");
        }
    }

    public displayResults() {
        console.log("\nElection Results:\n");
        let winner: Candidate | null = null;
        this.candidates.forEach(candidate => {
            console.log(`${candidate.name}: ${candidate.votes} votes`);
            if (!winner || candidate.votes > winner.votes) {
                winner = candidate;
            }
        });

        if (winner !== null) {
            console.log(`\n${(winner as Candidate).name} is the winner of the election with ${(winner as Candidate).votes} votes! Congratulations, ${(winner as Candidate).name}!\n`);
        } else {
            console.log("\nNo winner found.");
        }
    }
}

// Main function
function main() {
    const votingProgram = new VotingProgram();

    while (votingProgram.totalVotes < 10) {
        votingProgram.vote();
    }

    // Display results
    votingProgram.displayResults();
}

// Run the program
main();
