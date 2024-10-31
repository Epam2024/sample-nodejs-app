# sample-nodejs-app

Scenario of Git Issue :-

When the error occurs because your local main branch and the remote main branch have diverged. Here’s a step-by-step approach to resolve this issue:

Ans :-
1. Check the Differences: First, you can review what changes have diverged between your local and remote branches by running:

git fetch origin
git log HEAD..origin/main --oneline

2. Decide on Merge or Rebase: If you want to merge the changes from the remote branch (keeping both histories intact), you can use

git pull origin main --no-rebase

3. If you prefer to rebase (applying your changes on top of the remote changes), you can run:

git pull origin main --rebase

4. Push the Changes: Once you've completed the merge or rebase, you can then push the changes back to the remote repository:

git push origin main

5. Set Default Pull Behavior (Optional): If you want Git to automatically know how to handle such cases in the future, you can set a default pull strategy:

git config pull.rebase false

git config pull.rebase true


