let jiraIssues = function () {
    let issuesElm = document.querySelectorAll('table#compare-commits-table tbody td.commit-list-jira-issues-col a.commits-issues-trigger');
    let issues = [];
    issuesElm.forEach(issueElm => {
        issueElm.getAttribute('data-issue-keys').split(',').forEach(function (cde) {
            if (issues.includes(cde) == false) {
                issues.push(cde);
            }
        });
    });

    return issues.sort();
}
