# DICOM-WSI Integration Test Environment

This repository provides a Docker Compose configuration for setting up a test environment to evaluate the conversion of various Whole Slide Imaging (WSI) file formats into DICOM. The primary focus is on verifying compatibility with a Picture Archiving and Communication System (PACS), OpenSlide, and the OHIF viewer. Qupath is excluded from integration as it is not a web application.

### Usage
1. Clone this repository: 
2. Modify environment files (orthanc-index-db.env, orthanc.env, jupyter.env, minio.env) as needed.
3. Run `docker-compose up -d` to start the services.

Feel free to adapt this configuration to suit your specific testing requirements.

### Services

**PACS (Orthanc)**
Access Point: http://localhost:80 and http://localhost/app/explorer.html

**OHIF**
Access Point: http://localhost:81/

**Jupyter**
Jupyter notebook access: http://localhost:8888

**Minio**
Minio server access: http://localhost:9001 and http://localhost:9000
Username: demo
Password: demodemo
