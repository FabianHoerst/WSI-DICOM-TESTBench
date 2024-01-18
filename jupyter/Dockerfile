FROM quay.io/jupyter/pytorch-notebook:python-3.11.7

# install system software
USER root
RUN apt-get update \
    && apt-get --yes install apt-utils \
    && apt-get --yes install libvips libvips-dev libvips-tools \
    && apt-get --yes install git \
    && apt-get clean && rm -rf /var/lib/apt/lists/*
USER $NB_UID

# install python software and dependencies
# conda packages
RUN conda install conda-forge::openslide==4.0.0 -y \
    && conda install -c conda-forge pydicom -y \
    && conda clean --all --force -y

# pathopatcher
RUN git clone --branch unfixed_dependencies https://github.com/TIO-IKIM/PathoPatcher.git \
    && cd PathoPatcher \
    && pip install . \
    && cd .. \
    && rm -rf PathoPatcher

# other reqs
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
