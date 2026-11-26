### Step 1 — Go to your repository settings

`https://github.com/REPO_NAME/settings/rules`

Click **"New ruleset"** → **"New branch ruleset"**

### Step 2 — Configure the ruleset

**Name:** main protection**Enforcement status:** Active

Under **Target branches** → click **"Add target"** → select **"Include by pattern"** → type main

### Step 3 — Enable these rules

Check each of these exactly:

RuleSettingRestrict deletions✅
Block force pushes✅
Require linear history✅
Require a pull request before merging✅
 — set **Required approvals to 1**Dismiss stale pull request approvals✅
 (sub-option under the PR rule)Require status checks to pass✅
Require branches to be up to date✅
 (sub-option under status checks)

### Step 4 — Add the status checks

Under **"Require status checks to pass"**, click **"Add checks"** and type these **exactly** — they must match the job ids from ci.yml:

`quality`  
`build-and-test`

> ⚠️ Do **not** type Code Quality or Build & Test — those are the display names. GitHub wants the job id, which is the key under jobs: in the workflow file.

> ⚠️ These checks only appear in the autocomplete **after the CI pipeline has run at least once** on a PR. If the dropdown is empty, type the name manually and press Enter.

### Step 5 — Solo project workaround

Since this is a demo project you're likely working on alone, requiring 1 review means you'd be blocked from merging your own PRs. Two options:

**Option A** — Set required approvals to 0 for now (CI-only gate, no human review required). Good enough to demonstrate the concept.

**Option B** — Add yourself as a bypass exception under **"Bypass list"** → **"Add bypass"** → add your user with "Always" permission. Use this only to demo the flow, then remove it.

### Step 6 — Save and verify

Click **"Create"**. Then test it immediately:

bash

`# Try a direct push to main — should be rejected`

That error message is the confirmation that everything is wired up correctly. From this point on, the only path to main is through a PR with passing CI.