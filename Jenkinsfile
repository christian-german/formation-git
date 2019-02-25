@Library('common-library-jenkinsfile@master') _

def projetCompleteName = env.JOB_NAME

// agent ssh utilisé pour les commits git
def sshAgent = "jenkins-commun"

properties([
    disableConcurrentBuilds(),
    buildDiscarder(logRotator(numToKeepStr: "10", artifactNumToKeepStr: "10")),
    pipelineTriggers([pollSCM('H/5 * * * *')])
])

def repositories = [
  "snapshot": "https://nexus.adventiel.com/repository/npm-private-snapshot",
  "release": "https://nexus.adventiel.com/repository/npm-private"
]

nodeExtended("docker") {
  docker.image("node:8").inside {
    configFileProvider([configFile(fileId: "npmrc-docker-adventiel", targetLocation: ".npmrc")]) {
      stage("Checkout") {
         checkout scm
      }

      withEnv([
        "npm_config_cache=npm-cache",
        "HOME=.",
      ]) {
        stage("Tools") {
          sh "node --version"
          sh "npm --version"
        }

        stage("Build") {
          sh "npm install"
          sh "npm run package"
        }
      }
    }
  }

  stage("Deploy") {
    sshagent([sshAgent]) {
      sshagent(['documentation']) {
              sh '''
                    HOME_DOCUMENTATION=/var/www/documentation.adventiel.com
                    DOCUMENTATION_DIR="$HOME_DOCUMENTATION/a0e69b86-f9d5-48c1-b879-27db4b39a367"

                    ssh -o StrictHostKeyChecking=no livraison@documentation.pic.adventiel.io "sudo -u nginx rm -rf $DOCUMENTATION_DIR"
                    ssh -o StrictHostKeyChecking=no livraison@documentation.pic.adventiel.io "sudo -u nginx mkdir -p $DOCUMENTATION_DIR"
                    rsync --progress --rsync-path="sudo -u nginx rsync" ./reveal-js-presentation.zip livraison@documentation.pic.adventiel.io:$DOCUMENTATION_DIR/
                    ssh -o StrictHostKeyChecking=no livraison@documentation.pic.adventiel.io  "sudo -u nginx unzip $DOCUMENTATION_DIR/reveal-js-presentation.zip -d $DOCUMENTATION_DIR/ && sudo -u nginx rm $DOCUMENTATION_DIR/reveal-js-presentation.zip"
              '''
            }
    }
  }
}
