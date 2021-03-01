# Cheminfo Application Registry

This repository contains the **source code** of the official app registry for the cheminfo project.

## Adding an app to the registry

Apps are added to the registry by adding an entry to the `apps.yaml` file within this repository.

_Feel free to propose a new app category to be added to [`category.yaml`](https://github.com/kjappelbaum/cheminfo-app-registry/edit/main/categories.yaml) before or after adding your app._

1. Create a pull request to this repository that adds a new entry to the `apps.yaml` file, e.g., by [editing the file directly in the browser](https://github.com/kjappelbaum/cheminfo-app-registry/edit/main/apps.yaml?message=Add%20app%20%3Capp-name%3E). Example:

   ```yaml
   my-cheminfo-app:
     metadata:
       title: MyCheminfo app
       description: |
         blbalablab
       authors: A. Doe, B. Doe
       documentation_url: https://my-big-map-app.readthedocs.io
       logo: https://github.com/my-org/my-big-map-app/raw/main/logo.png
       version: "1.1"
     categories:
       - field-materials-science
       - parser
   ```

   **Note**: Only the metadata fields `title` and `description` are mandatory.

2. Your app will show up in the [Cheminfo App Store](cheminfo.github.io/cheminfo-app-registry") once your pull request is approved and merged.

**Tip**: The app store supports the `$ref` syntax to reference externally hosted documents.
That means you can reference metadata that is hosted at a different location, which makes it easier to dynamically update it.
For example, if you place a `metadata.yaml` file within your app repository, then you can reference that file in the app store like this:

```yaml
my-cheminfo-app:
  metadata:
    $ref: https://github.com/my-org/my-cheminfo-app/raw/main/metadata.yaml
```

You can even reference only parts of the metadata, example:

```yaml
my-cheminfo-app:
  metadata:
    title: MyCheminfo app
    description:
      $ref: https://github.com/my-org/my-cheminfo-app/raw/main/metadata.yaml#description
```

_The app store will assume that external references are in JSON format unless the referenced path ends with `.yaml` or `.yml`._

### Valid keys for app entries in `apps.yaml`

|     Key      |  Requirement  | Description                                                                                                                                                    |
| :----------: | :-----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  `metadata`  | **Mandatory** | General description of the app (see below).                                                                                                                    |
| `categories` |   Optional    | If provided, must be one of the valid categories specified in [`categories.yaml`](https://github.com/big-map/cheminfo-app-registry/blob/main/categories.yaml). |
|  `git_url`   |   Optional    | Link to the source code git repository.                                                                                                                        |

### Valid keys for app metadata:

|      Key      |  Requirement  | Description                                                                 |
| :-----------: | :-----------: | :-------------------------------------------------------------------------- |
|    `title`    | **Mandatory** | The title will be displayed in the list of apps in the application manager. |
| `description` | **Mandatory** | The description will be displayed on the detail page of your app.           |
|   `authors`   |   Optional    | Comma-separated list of authors.                                            |
|    `logo`     |   Optional    | Url to a logo file (png or jpg).                                            |

## Acknowledgements

This registry is based on the ones that were created for [AiiDA](https://aiidateam.github.io/aiida-registry/), [AiiDAlab](https://github.com/aiidalab/aiidalab-registry) and [BIG-MAP](https://github.com/BIG-MAP/cheminfo-app-registry).
