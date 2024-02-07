<!-- Delete !-->
# 🔑 What does this repo template offer for You?

A template for the creation of an OCR Model Repo(sitory) with the following functions and features: 
   - help for the creation of metadata for the OCR Model Repo
   - guidelines for filing and organizing the OCR Model Repo
   - automatic functions that control a github-action-workflow:
      - evaluation and generation of metadata in the formats.
         - JSON (metadata.json)
         - YML (metadata.yml)
      - generation of a GithubPage (ph) for the internet users
      - generation of README

# 👷 👷‍♀️ How to use the template

### Step 1

* Create a repository for your OCR Model. Click on the [**Use this Template**](/../../generate) button.
* Save your data to the repository. Your data should be stored in the **Data folder**. See the Organization of folders and files in the Repo <b>[🗀](#myfootnote1)</b> 

### Step 2

* Metadata is necessary to ensure that your repository is documented correctly. It is best to use the <a href="https://tboenig.github.io/gt-metadata/document-your-gt.html" target="_blank" rel="noopener noreferrer">metadata</a> form to record the metadata.


### Step 3

* The template contains tools that automatically create specific web pages from the stored metadata and OCR Model. You can publish these as GitHub pages.
   -  1. The analysis we started through a tag. see **How to start the automatic functions?**   
   -  2. Adjust the GitHub [page setting](/../../settings/pages). Select the [main branch and /docs folder](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) to do this. 
   -  3. [Classify your repositorium with topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics) 


### Step 4

* The README file is also updated during the analysis. This contains [the sections (tags): Title, Description, Metadata, Models, GitHub-Pages.
* The sections, marked with <!-- tag --><!-- /tag -->, are updated automatically.
* Outside of the sections, marked with <!-- tag --><!-- /tag -->, you can customise the README file.

# 📁 Organization of folders and files in the OCR-Model-Repo
 The structure of the repo is the following:

```
├── LICENSE.md
├── README.md
├── docs
└── data
   └── ocr-engine / software
      └── title or identifier
         ├── model(s)
         └── metadata       
 ```       

## 🤖 How to start the automatic functions?

The github-action-workflow is triggered by assigning a version tag (e.g. `v1.8.11`, `V1.8.11`, `1.8.11`) at push.
The version tag consists of a three-part number code.
Number code: e.g. `1.8.11`
The number code has the following meaning:
- the first number indicates the version number (1).
- the second number indicates the feature (8)
- the third number indicates the fixes, paths... (11)


# 📓 OCR Model repo metadata
You can find metadata about the OCR Model Repo in the following files.
   - metadata.json
   - metadata.yml
   - CITATION.cff

The content of the metadata files is the same, only the formats vary.
You can find the file at:
   - metadata.json 🠂
   - metadata.yml 🠂
   - CITATION.cff 🠂
<!-- /Delete !-->
<!-- Title !-->
<!-- /Title !-->

<!-- Description !-->
<!-- /Description !-->

<!-- Metadata !-->
<!-- /Metadata !-->

<!-- Models !-->
<!-- /Models !-->

<!-- GitHub-Pages !-->
<!-- /GitHub-Pages !-->